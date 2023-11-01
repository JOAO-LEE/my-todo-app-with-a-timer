import todosStyle from './todos-style.module.scss';
export default function Todos () {

    return (
        <aside className={todosStyle["todos"]}>
            <h2>My todos</h2>
            <ul>
            <li className={todosStyle["item"]}>
                <p>Estudar REACT.js</p>
                <span>09:00</span>
            </li>
            </ul>
        </aside>
    )
}
