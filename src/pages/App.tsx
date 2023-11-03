import '../index.css';
import Form from '../components/Form/Form'
import Todos from '../components/Todos/Todos';
import appStyle from './App.module.scss';
import Timer from '../components/Timer/Timer';
import { useState } from 'react';
import ITask from '../interfaces/ITask';
// import { TTheme } from '../types/TTasks';
// import { Moon, Sun } from '@phosphor-icons/react';

function App() {
  const [task, setTask] = useState<Array<ITask>>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>();

  const taskSelection = (taskToSelect: ITask): void => {
      setSelectedTask(taskToSelect);
  }
  // const [theme, setTheme] = useState<TTheme>("light");
  // console.log(theme);
  
  // const isThemeLight = theme === "light"
  // const changeTheme = () => setTheme(isThemeLight ? "dark" : "light");
  // className={isThemeLight ? "main-light" : "main-dark" }
  return (
    <main >
      <div>
        {/* <Sun size="30px" onClick={changeTheme}/> */}
        {/* <Moon size="30px" onClick={changeTheme}/> */}
      </div>
      <section className={appStyle["app-style"]}>
        <Form setTask={setTask} />
        <Todos task={task} taskSelection={taskSelection}/>
        <Timer />
      </section>
    </main>
  )
}

export default App
