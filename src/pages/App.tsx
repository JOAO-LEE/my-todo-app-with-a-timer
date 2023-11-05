import '../index.css';
import Form from '../components/Form/Form'
import Tasks from '../components/Tasks/TaskList';
import appStyle from './App.module.scss';
import Timer from '../components/Timer/Timer';
import { useState } from 'react';
import { ITask } from '../interfaces/ITask';

function App() {
  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>();

  const taskSelection = (taskToSelect: ITask): void => {
    setSelectedTask(taskToSelect);
    setTasks(previousTasks => previousTasks
      .map(t => ({
          ...t,
          taskSelected: t.id === taskToSelect.id ? true : false
      })
    ));
  };

  const taskToDelete = (id: string): void => {
    setTasks(() => tasks.filter(task => (!(task.id === id))))
  };

  return (
    <main >
      <section className={appStyle["app-style"]}>
        <Form setTask={setTasks} />
        <Tasks tasks={tasks} taskSelection={taskSelection} taskToDelete={taskToDelete}/>
        <Timer />
      </section>
    </main>
  )
}

export default App
