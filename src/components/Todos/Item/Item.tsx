import { ITask, ITaskItem  } from '../../../interfaces/ITask';
import todosStyle from '../todos-style.module.scss';
export default function Item({task, time, taskSelected, taskCompleted, taskSelection }: ITaskItem) {
    return (
        <li className={todosStyle["item"]}>
            <p>{task}</p>
            <span>{time}</span>
        </li>
    )
}