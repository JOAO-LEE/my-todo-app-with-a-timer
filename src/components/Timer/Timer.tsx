import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import timerStyle from './timer-style.module.scss';
import { timeToSeconds } from "../../assets/common/utils/time";
import { ITimerProps } from '../../interfaces/ITimer';
import { useEffect, useState } from "react";

const ONE_SECOND = 1000;

export default function Timer ({ selectedTask, handleTime, completeTask }: ITimerProps) {
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (selectedTask?.time) {
            handleTime?.setTimer(timeToSeconds(selectedTask.time));
        }
    }, [selectedTask]);

    const setRegression = (counter: number = 0): void => {
        setTimeout(() => {
            if (counter > 0 ) {
                setIsRunning(true);
                handleTime?.setTimer(counter - 1); 
                return setRegression(counter - 1);
            }
            setIsRunning(false);
            completeTask();
        }, ONE_SECOND);
    };

    return (
        <div className={timerStyle["timer"]}>
            <p className={timerStyle["timer-title"]}>Choose a Todo and Start the timer</p>
            {selectedTask?.taskSelected && <p>{selectedTask?.task}</p>}
            <div className={timerStyle["clock-container"]}>
                <Clock time={handleTime?.time} running={isRunning} />
            </div>
            <Button typeAndActions={{type: "submit", onClick: () => setRegression(handleTime?.time), disable: selectedTask?.taskSelected}}>
                Start
            </Button>
        </div>
    )
}