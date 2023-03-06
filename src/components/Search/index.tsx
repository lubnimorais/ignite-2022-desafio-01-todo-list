import { FormEvent, InvalidEvent, useState } from "react"

import { Plus, PlusCircle } from 'phosphor-react';

import styles from './styles.module.css'

interface ISearchProps {
  onAddToDo: (task: string) => void
}

const Search = ({ onAddToDo }: ISearchProps) => {
  const [todo, setTodo] = useState('');

  function handleToDoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Informe a tarefa!');
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    onAddToDo(todo);

    setTodo('');
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles.searchForm}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onInvalid={handleToDoInvalid}
          value={todo}
          onChange={event => setTodo(event.target.value)}
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

export { Search }