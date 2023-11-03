import '../index.css';
import Form from '../components/Form/Form'
import Todos from '../components/Todos/Todos';
import appStyle from './App.module.scss';
import Timer from '../components/Timer/Timer';
import { useState } from 'react';
import ITask from '../interfaces/ITask';

function App() {
  const [task, setTask] = useState<Array<ITask>>([]);
  return (
    <main className={appStyle["app-style"]}>
      <Form setTask={setTask} />
      <Todos task={task}  />
      <Timer />
    </main>
  )
}

export default App
