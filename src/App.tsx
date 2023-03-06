import { FormEvent, useState } from 'react'

import { Header } from './components/Header';
import { Search } from './components/Search';
import { Card } from './components/Card';

import styles from './app.module.css';

interface ITask {
  task: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tasksCountConcluded, setTasksCountConcluded] = useState(0);

  function handleAddTask(task: string) {
    const data = { task, done: false };

    setTasks(oldState => [data, ...oldState]);
  }

  function handleCheckTask(taskChecked: string) {
    const tasksCopy = tasks;

    const tasksChecked = tasksCopy.map(task => {
      if (task.task === taskChecked) {
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
        return accumulator + 1;
      }

      return accumulator;
    }, 0)

    // const taskConcluded = tasksChecked.filter(task => task.done === true);

    setTasks(tasksChecked);
    setTasksCountConcluded(taskConcluded);
  }

  function handleDeleteTask(taskDeleted: string) {
    const tasksCopy = tasks;

    const tasksDeleted = tasksCopy.filter(task => task.task !== taskDeleted);

    setTasks(tasksDeleted);
  }

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <Search onAddToDo={handleAddTask} />

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
            tasks.map(task => (
              <Card
                key={task.task}
                task={task}
                onCheckTask={handleCheckTask}
                onDeleteTask={handleDeleteTask} />
            ))
          }

        </div>

      </main>
    </div>
  )
}

export default App
