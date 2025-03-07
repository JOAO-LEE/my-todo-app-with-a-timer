import './Clock.scss';

export default function Clock ({ time = 0 }: { time: number | undefined}) {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minute, minuteUnity] = minutes.toString().padStart(2, "0");
    const [second, secondUnity] = seconds.toString().padStart(2, "0");

    return ( 
        <div className='clock'>
            <span>{minute}</span>
            <span>{minuteUnity}</span>
            <span>:</span>
            <span>{second}</span>
            <span>{secondUnity}</span>
        </div>
    )
}