import '../index.css';
import './App.scss';
import Form from '../components/Form/Form'
import Tasks from '../components/Tasks/TaskList';
import Timer from '../components/Timer/Timer';
import { useState } from 'react';
import { ITask } from '../interfaces/ITask';
import { Header } from '../ui/Header/Header';
import { Footer } from '../ui/Footer/Footer';

function App() {
  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>();
  const [time, setTimer] = useState<number | undefined>();

  const selectTask = (taskToSelect: ITask): void => {
    setSelectedTask(taskToSelect);
    setTasks(previousTasks => previousTasks
      .map(t => ({
          ...t,
          taskSelected: t.id === taskToSelect.id
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
    )}
  }

  return (
    <>
      <Header />
      <main id="main-wrapper">
        <section id="section-wrapper">
          <Form setTask={setTasks} />
          <Tasks tasks={tasks} selectTask={selectTask} deleteTask={deleteTask}/>
          <Timer handleTime={{time, setTimer}} selectedTask={selectedTask!} completeTask={completeTask}/>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
