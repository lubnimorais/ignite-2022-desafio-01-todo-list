import { useState } from 'react'


import styles from './app.module.css'

import { Header } from './components/Header'
import { Search } from './components/Search'

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <Search onAddToDo={() => { }} />

        <div className={styles.listTodo}>
          <header className={styles.headerInfo}>
            <div className={styles.contentCountTasks}>
              <strong>Tarefas criadas</strong>
              <span>5</span>
            </div>

            <div className={styles.contentTasksConcluded}>
              <strong>Concluídas</strong>
              <span>2 de 5</span>
            </div>
          </header>

          <div className={styles.card}></div>
        </div>

      </main>
    </div>
  )
}

export default App
