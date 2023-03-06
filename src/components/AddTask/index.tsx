import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.css'

interface IAddTaskProps {
  onAddToDo: (task: string) => void
}

const AddTask = ({ onAddToDo }: IAddTaskProps) => {
  const [task, setTask] = useState('');

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTask(event.target.value)
  }

  function handleToDoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Informe a tarefa!');
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    onAddToDo(task);

    setTask('');
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles.searchForm}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
          onInvalid={handleToDoInvalid}
          value={task}
          onChange={handleNewTask}
        />

        <div className={styles.contentButton}>
          <button type="submit">
            <div>
              Criar
              <PlusCircle size={17} />
            </div>
          </button>
        </div>
      </div>


    </form>
  )
}

export { AddTask }