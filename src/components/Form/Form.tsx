import { ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import formStyle from './form.module.scss';
import ITask from "../ITask";

export default function Form () {
    const [todoValue, setTodoValue] = useState<ITask>({task: "", time: ""});
    console.log(todoValue);
    

    const addTask = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
    };

    const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
        const {target: { value, name }} = event;
        setTodoValue(e => ({...e, [name]: value}))
    };

    return (
        <form className={formStyle["new-task"]} onSubmit={addTask}>
            <div className={formStyle["input-container"]}>
                <label htmlFor="input-todo">
                    Todo:
                </label>
                <input
                placeholder="Insert your Todo here!"
                name="task"
                id="input-todo" 
                type="text"
                required
                value={todoValue.task}
                onChange={(e) => handleForm(e)}
                />
            </div>
            <div className={formStyle["input-container"]}>
                <label htmlFor="time-todo">
                    Time:
                </label>
                <input
                min="00:00:00"
                max="08:00:00"
                name="time"
                id="time-todo"  
                type="time" 
                required
                step="1" 
                value={todoValue.time}
                onChange={(e) => handleForm(e)}
                />
            </div>
            <Button type="submit">
                Add Todo
            </Button>
        </form>
    )
}
