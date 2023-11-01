import '../index.css';
import Form from '../components/Form/Form'
import Todos from '../components/Todos/Todos';
import appStyle from './App.module.scss';
import Timer from '../components/Timer/Timer';

function App() {
  return (
    <main className={appStyle["app-style"]}>
      <Form />
      <Todos />
      <Timer />
    </main>
  )
}

export default App
