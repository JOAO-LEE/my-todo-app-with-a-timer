import ITask from '../../interfaces/ITask';
import Item from './Item/Item';
import todosStyle from './todos-style.module.scss';
export default function Todos ({task}: {task: Array<ITask>}) {

    return (
        <aside className={todosStyle["todos"]}>
            <h2>My todos</h2>
            <ul>
                {task.map(t => (
                   <Item task={t.task} time={t.time} /> 
                ))}
            </ul>
        </aside>
    )
}
