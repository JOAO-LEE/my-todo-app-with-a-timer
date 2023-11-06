import { ITaskListProps } from '../../interfaces/ITask';
import Item from './Item/Item';
import todosStyle from './todos-style.module.scss';

export default function TaskList ({ tasks, selectTask,deleteTask }: ITaskListProps) {

    return (
        <aside className={todosStyle["todos"]}>
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
