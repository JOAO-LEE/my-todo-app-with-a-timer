import { CheckCircle, TrashSimple } from '@phosphor-icons/react';
import { ITaskItemActions  } from '../../../interfaces/ITask';
import todosStyle from '../todos-style.module.scss';

export default function Item({task, time, taskSelected, taskCompleted, id, taskSelection, taskToDelete }: ITaskItemActions) {
    let selectedClass = taskSelected && `${todosStyle["selected-item"]}`;

    return (
        <li className={`${todosStyle["item"]} ${selectedClass}`} onClick={() => taskSelection({task, time, taskSelected, taskCompleted, id})}>
            <div>
                <p className={todosStyle["created-task"]}>{task}</p>
                <span className={todosStyle["task-time"]}>{time}</span>
            </div>
            <div className={todosStyle["actions-container"]}>
                <CheckCircle className={todosStyle["check-mark"]} />
                <TrashSimple className={todosStyle["trash-can"]} onClick={() => taskToDelete(id!)} />
            </div>
        </li>
    )
}