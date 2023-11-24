import { Trash } from 'phosphor-react'

import styles from './Tasks.module.css'
import { ChangeEvent } from 'react';

interface TasksProps {
  id: string;
  name: string;
  hasBorder?: boolean;
  onDeleteTask: (name: string) => void;
  onConcludeTask: (active: boolean) => void
}

export function Tasks({ id, name, hasBorder = false, onDeleteTask, onConcludeTask }: TasksProps) {

  function handleDeleteTaks() {
    onDeleteTask(name);
  }

  function handleConcludeTask(event: ChangeEvent<HTMLInputElement>) {
    onConcludeTask(event?.target?.checked)
  }

  return (
    <div className={hasBorder ? styles.tasksNoBorder : styles.tasks} >
      <div className={styles.tasksInput}>
        <input type="checkbox" id={id} onChange={handleConcludeTask} />
        <label htmlFor={id}>{name}</label>
      </div>
      <button title='Deletar tarefa' onClick={handleDeleteTaks}>
        <Trash size={18} />
      </button>
    </div>
  )
}
