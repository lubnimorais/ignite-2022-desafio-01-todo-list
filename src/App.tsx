import { useState } from 'react'

import { v4 as uuidV4 } from 'uuid';

import { ClipboardText } from 'phosphor-react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { Card } from './components/Card';

import styles from './app.module.css';

interface ITask {
  id: string;
  task: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tasksCountConcluded, setTasksCountConcluded] = useState(0);

  function handleAddTask(task: string) {
    const data = { id: uuidV4(), task, done: false };

    setTasks(oldState => [data, ...oldState]);
  }

  function handleCheckTask(id: string) {
    const tasksCopy = tasks;

    const tasksChecked = tasksCopy.map(task => {
      if (task.id === id) {
        if (task.done) {
          return {
            ...task,
            done: false
          }
        }

        return {
          ...task,
          done: true
        };
      }

      return task;
    });

    const taskConcluded = tasksChecked.reduce((accumulator, task) => {
      if (task.done) {
        accumulator = accumulator + 1;
      }

      return accumulator;
    }, 0)

    // const taskConcluded = tasksChecked.filter(task => task.done === true);

    setTasks(tasksChecked);
    setTasksCountConcluded(taskConcluded);
  }

  function handleDeleteTask(id: string) {
    const tasksCopy = tasks;

    const tasksDeleted = tasksCopy.filter(task => task.id !== id);

    setTasks(tasksDeleted);
  }

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <AddTask onAddToDo={handleAddTask} />

        <div className={styles.listTodo}>
          <header className={styles.headerInfo}>
            <div className={styles.contentCountTasks}>
              <strong>Tarefas criadas</strong>
              <span>{tasks.length}</span>
            </div>

            <div className={styles.contentTasksConcluded}>
              <strong>Concluídas</strong>
              <span>{tasksCountConcluded} de {tasks.length}</span>
            </div>
          </header>

          {
            tasks.length === 0 ? (
              <div className={styles.emptyTasksList}>
                <ClipboardText size={56} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            ) :
              (
                tasks.map(task => (
                  <Card
                    key={task.task}
                    task={task}
                    onCheckTask={handleCheckTask}
                    onDeleteTask={handleDeleteTask} />
                ))
              )
          }

        </div>

      </main>
    </div>
  )
}

export default App
