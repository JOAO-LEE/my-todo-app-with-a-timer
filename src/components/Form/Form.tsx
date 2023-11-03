import { ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import formStyle from './form.module.scss';
import ITask from "../../interfaces/ITask";
import { v4  as uuidv4 } from "uuid";

export default function Form ({ setTask }: { setTask: React.Dispatch<React.SetStateAction<Array<ITask>>>}) {
    const [todoValue, setTodoValue] = useState<ITask>({});

    const addTask = (event: React.FormEvent<HTMLFormElement> ) => {
        setTodoValue({ task: "", time: "" });
        event.preventDefault();
        setTask((previousTasks) => [...previousTasks, todoValue]);
    };

    const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value, name } } = event;
        setTodoValue(e => ({ ...e, [name]: value }))
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
