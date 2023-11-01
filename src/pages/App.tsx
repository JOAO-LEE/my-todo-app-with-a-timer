import '../index.css';
import Form from '../components/Form/Form'
import Todos from '../components/Todos/Todos';
import appStyle from './App.module.scss';

function App() {
  return (
    <main className={appStyle["app-style"]}>
      <Form />
      <Todos />
    </main>
  )
}

export default App
