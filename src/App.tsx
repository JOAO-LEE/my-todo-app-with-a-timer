import './index.css';
import TodoForm from './components/Form/TodoForm'
import Todos from './components/Todos/Todos';

function App() {
  return (
    <main>
      <h1>Todo with Timer!</h1>
      <TodoForm />
      <Todos />
    </main>
  )
}

export default App
