import { ITaskProp } from '../../interfaces/ITask';
import Item from './Item/Item';
import todosStyle from './todos-style.module.scss';

export default function Todos ({ tasks, taskSelection }: ITaskProp) {

    return (
        <aside className={todosStyle["todos"]}>
            <h2>My todos</h2>
            <ul>
                {tasks.map((task) => (
                   <Item
                   taskSelection={taskSelection}
                    key={task.id} 
                    {...task} />
                ))}
            </ul>
        </aside>
    )
}
