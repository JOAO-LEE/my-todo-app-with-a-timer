import Item from './Item/Item';
import todosStyle from './todos-style.module.scss';
export default function Todos () {

    return (
        <aside className={todosStyle["todos"]}>
            <h2>My todos</h2>
            <ul>
                <Item />
            </ul>
        </aside>
    )
}
