import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import timerStyle from './timer-style.module.scss';
import { timeToSeconds } from "../../assets/common/utils/time";
import { ITask } from "../../interfaces/ITask";
import { useEffect, useState } from "react";


export default function Timer (selectedTask: ITask) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selectedTask?.time) {
            setTime(timeToSeconds(selectedTask.time))
        }
    
    }, [selectedTask])

    return (
        <div className={timerStyle["timer"]}>
            <p className={timerStyle["timer-title"]}>Choose a Todo and Start the timer</p>
            {selectedTask && <p>{selectedTask.task}</p>}
            <div className={timerStyle["clock-container"]}>
                <Clock time={time} />
            </div>
            <Button type="submit">
                Start
            </Button>
        </div>
    )
}