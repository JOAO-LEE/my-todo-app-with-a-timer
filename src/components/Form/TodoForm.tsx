import { useState } from "react"
import Button from "../Button/Button"
export default function TodoForm () {
    const [todoValue, setTodoValue] = useState("");

    return (
        <form>
            <div>
                <label htmlFor="input-todo">
                    Todo:
                </label>
                <input
                placeholder="Insert your Todo here!"
                name="input-todo"
                id="input-todo" 
                type="text"
                required
                value={todoValue}
                onChange={({ target: { value } }) => setTodoValue(value)}
                />
            </div>
            <div>
                <label htmlFor="time-todo">
                    Time:
                </label>
                <input
                min="00:00:00"
                max="08:00:00"
                name="time-todo"
                id="time-todo"  
                type="time" 
                required
                step="1" 
                />
            </div>
            <Button />
        </form>
    )
}
