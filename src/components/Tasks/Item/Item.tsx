import { CheckCircle, TrashSimple } from '@phosphor-icons/react';
import { ITaskItemActions  } from '../../../interfaces/ITask';
import itemStyle from '../Item/item-style.module.scss';

export default function Item({task, time, taskSelected, taskCompleted, id, selectTask, deleteTask }: ITaskItemActions) {

    const isTaskSelected: string | false | undefined = taskSelected && `${itemStyle["selected-item"]}`;
    const isTaskCompleted: string | false | undefined = taskCompleted && `${itemStyle["completed-item"]}`;

    return (
        <li className={`${itemStyle["item"]} ${isTaskSelected} ${isTaskCompleted}`} onClick={() => selectTask({task, time, taskSelected, taskCompleted, id})}>
            <div>
                <p className={itemStyle["created-task"]}>{task}</p>
                <span className={itemStyle["task-time"]}>{time}</span>
            </div>
            <div className={itemStyle["actions-container"]}>
                <CheckCircle className={itemStyle["check-mark"]}  />
                <TrashSimple className={itemStyle["trash-can"]} onClick={() => deleteTask(id!)} />
            </div>
        </li>
    )
}