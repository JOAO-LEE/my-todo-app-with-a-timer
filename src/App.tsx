import { useState } from 'react'
import TodoForm from './components/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <TodoForm />
    </main>
  )
}

export default App
