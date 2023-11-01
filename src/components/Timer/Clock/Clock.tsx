import clockStyle from './clock-style.module.scss';
export default function Clock () {
    return ( 
        <>
            <span className={clockStyle["clock-numbers"]}>0</span>
            <span className={clockStyle["clock-numbers"]}>0</span>
            <span className={clockStyle["clock-division"]}>:</span>
            <span className={clockStyle["clock-numbers"]}>0</span>
            <span className={clockStyle["clock-numbers"]}>0</span>
        </>
    )
}