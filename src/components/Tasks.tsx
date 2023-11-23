import { Trash } from 'phosphor-react'

import styles from './Tasks.module.css'

interface TasksProps{
  id: string;
  name: string;
  hasBorder?: boolean;
}

export function Tasks({ id ,name, hasBorder = false}: TasksProps) {
  
  return (
    <div className={hasBorder ? styles.tasksNoBorder : styles.tasks} >
      <div className={styles.tasksInput}>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{name}</label>
      </div>
      <button title='Deletar tarefa'>
        <Trash size={18} />
      </button>
    </div>
  )
}
