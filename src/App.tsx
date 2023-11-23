import { PlusCircle, CalendarBlank } from 'phosphor-react'
import { Tasks } from './components/Tasks'

import './global.css'
import styles from './App.module.css'

import todoLogo from './assets/Logo.svg'
import { useState } from 'react'

interface task{
  id: string;
  name: string;
  active: boolean;
}

function App() {

  const [tasks, setTasks] = useState({})


  return (
    <div className={styles.wrapper}>
      <header className={styles.headerContainer}>
        <img src={todoLogo} alt='Logo TO-DO' />
        <div className={styles.headerInput}>
          <input type='text' placeholder='Adicione uma nova tarefa' name='tarefa' />
          <button>
            <span>Criar</span>
            <PlusCircle size={18} />
          </button>
        </div>
      </header>
      <article className={styles.articleContainer}>
        <div className={styles.infoTasks}>
          <div>
            <label htmlFor='total-criado'>Tarefas Criadas</label>
            <span id='total-criado' className={styles.spanQtd}>0</span>
          </div>
          <div>
            <label htmlFor='concluidas'>Concluídas</label>
            <span id='concluidas' className={styles.spanQtd}>0</span>
          </div>
        </div>
        <div className={styles.listTasks}>
          <div className={styles.noTasks}>
            <CalendarBlank size={60} />
            <b>Você ainda não tem tarefas cadastradas</b>
            <span>Crie tarefas e organize sues itens a fazer</span>
          </div>
          <Tasks id="1" name= "Utilizamos a regra className, porém com template literals" hasBorder />
          <Tasks id="2" name= "Assim podemos inserir classes fixas ou por meio de variáveis" hasBorder />
          <Tasks id="3" name= "O link acima contém um cupom de desconto para os cursos!"  />
          <Tasks id="4" name= "Neste artigo você aprendeu a como inserir múltiplas classes em componente de React"  />
          <Tasks id="5" name= "Neste artigo você aprendeu a como inserir múltiplas classes em componente de React"  />
          <Tasks id="6" name= "Neste artigo você aprendeu a como inserir múltiplas classes em componente de React"  />
        </div>
      </article>
    </div>
  )
}

export default App
