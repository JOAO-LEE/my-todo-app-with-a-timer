import { ITaskItem  } from '../../../interfaces/ITask';
import todosStyle from '../todos-style.module.scss';

export default function Item({task, time, taskSelected, taskCompleted, taskSelection, id }: ITaskItem) {
    let selectedClass = taskSelected && `${todosStyle["selected-item"]}`;

    return (
        <li className={`${todosStyle["item"]} ${selectedClass}`} onClick={() => taskSelection({task, time, taskSelected, taskCompleted, id})}>
            <p>{task}</p>
            <span>{time}</span>
        </li>
    )
}