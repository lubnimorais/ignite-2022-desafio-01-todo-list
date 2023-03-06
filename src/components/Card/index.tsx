import { Trash, Check } from 'phosphor-react'

import styles from './styles.module.css'

interface ITask {
  task: string;
  done: boolean;
}

interface ICardProps {
  task: ITask;
  onCheckTask: (task: string) => void;
  onDeleteTask: (task: string) => void;
}

const Card = ({ task, onCheckTask, onDeleteTask }: ICardProps) => {
  return (
    <div className={styles.card}>
      <button
        type='button'
        className={task.done ? styles.checkButtonConcluded : styles.checkButton}
        onClick={() => { onCheckTask(task.task) }}
      >
        {task.done && (
          <Check size={16} color="#FFFFFF" />
        )}
      </button>

      <p className={task.done ? styles.taskConcluded : styles.task}>
        {task.task}
      </p>

      <button
        type='button'
        className={styles.deleteButton}
        onClick={() => { onDeleteTask(task.task) }}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}

export { Card }