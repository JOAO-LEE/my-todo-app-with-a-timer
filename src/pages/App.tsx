import '../index.css';
import Form from '../components/Form/Form'
import Todos from '../components/Todos/Todos';
import appStyle from './App.module.scss';
import Timer from '../components/Timer/Timer';
import { useState } from 'react';
import { ITask } from '../interfaces/ITask';
// import { TTheme } from '../types/TTasks';
// import { Moon, Sun } from '@phosphor-icons/react';

function App() {
  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>();

  const taskSelection = (taskToSelect: ITask): void => {
    setSelectedTask(taskToSelect);
    setTasks(previousTask => previousTask
      .map(t => ({
          ...t,
          taskSelected: t.id === taskToSelect.id ? true : false
      })
    ));
  };

  return (
    <main >
      <section className={appStyle["app-style"]}>
        <Form setTask={setTasks} />
        <Todos tasks={tasks} taskSelection={taskSelection}/>
        <Timer />
      </section>
    </main>
  )
}

export default App
