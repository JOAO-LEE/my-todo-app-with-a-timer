import clockStyle from './clock-style.module.scss';

export default function Clock ({ time = 0, running }: { time: number | undefined, running: boolean }) {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minute, minuteUnity] = minutes.toString().padStart(2, "0");
    const [second, secondUnity] = seconds.toString().padStart(2, "0");
    console.log(time);
    

    const clockIsNotSetToZero = time && running ? clockStyle["clock-animation"] : clockStyle["clock-stopped"]

    return ( 
        <>
            <span className={`${clockStyle["clock-numbers"]} ${clockIsNotSetToZero}`}>{minute}</span>
            <span className={`${clockStyle["clock-numbers"]} ${clockIsNotSetToZero}`}>{minuteUnity}</span>
            <span className={`${clockStyle["clock-numbers"]} ${clockIsNotSetToZero}`}>{second}</span>
            <span className={`${clockStyle["clock-numbers"]} ${clockIsNotSetToZero}`}>{secondUnity}</span>
        </>
    )
}