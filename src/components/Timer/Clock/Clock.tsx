import clockStyle from './clock-style.module.scss';
export default function Clock ({time = 0 }: {time: number | undefined}) {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minute, minuteUnity] = minutes.toString().padStart(2, "0")
    const [second, secondUnity] = seconds.toString().padStart(2, "0")
    return ( 
        <>
            <span className={clockStyle["clock-numbers"]}>{minute}</span>
            <span className={clockStyle["clock-numbers"]}>{minuteUnity}</span>
            <span className={clockStyle["clock-division"]}>:</span>
            <span className={clockStyle["clock-numbers"]}>{second}</span>
            <span className={clockStyle["clock-numbers"]}>{secondUnity}</span>
        </>
    )
}