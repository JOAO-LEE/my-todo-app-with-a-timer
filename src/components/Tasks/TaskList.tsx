import { ITaskListProps } from '../../interfaces/ITask';
import Item from './Item/Item';
import taskStyle from './tasks-style.module.scss';

export default function TaskList ({ tasks, selectTask, deleteTask }: ITaskListProps) {

    return (
        <aside className={taskStyle["todos"]}>
            <h2>My todos</h2>
            <ul>
                {tasks.map((task) => (
                   <Item
                   selectTask={selectTask}
                   deleteTask={deleteTask}
                    key={task.id} 
                    {...task} />
                ))}
            </ul>
        </aside>
    )
}
