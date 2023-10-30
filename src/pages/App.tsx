import '../index.css';
import TodoForm from '../components/Form/TodoForm'
import Todos from '../components/Todos/Todos';
import './style.scss';

function App() {
  return (
    <main className="app-style">
      <h1>Todo with Timer!</h1>
      <TodoForm />
      <Todos />
    </main>
  )
}

export default App
