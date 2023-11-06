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
  let [time, setTimer] = useState<number | undefined>();

  const selectTask = (taskToSelect: ITask): void => {
    setSelectedTask(taskToSelect);
    setTasks(previousTasks => previousTasks
      .map(t => ({
          ...t,
          taskSelected: t.id === taskToSelect.id ? true : false
      })
    ));
  };

  const deleteTask = (id: string): void => {
    setTasks(() => tasks.filter(task => (!(task.id === id))));
  };

  const completeTask = (): void => {
    setSelectedTask(undefined);
    if (selectedTask) {
     setTasks(previousTasks => previousTasks.map(task => {
        if (task.id === selectedTask.id) {
          setTimer(0);
          return {
            ...task,
            taskCompleted: true,
            taskSelected: false,
          };
        }
        return task;
      })
    )};
  }

  return (
    <main >
      <section className={appStyle["app-style"]}>
        <Form setTask={setTasks} />
        <Tasks tasks={tasks} selectTask={selectTask} deleteTask={deleteTask}/>
        <Timer handleTime={{time, setTimer}} selectedTask={selectedTask!} completeTask={completeTask}/>
      </section>
    </main>
  )
}

export default App
