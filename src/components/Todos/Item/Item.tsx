import todosStyle from '../todos-style.module.scss';
export default function Item ({ task, time }: { task?: string, time?: string }) {
    return (
        <li className={todosStyle["item"]}>
            <p>{task}</p>
            <span>{time}</span>
        </li>
    )
}