import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import timerStyle from './timer-style.module.scss';
import { timeToSeconds } from "../../assets/common/utils/time";
import { ITask } from "../../interfaces/ITask";
import ITimer from '../../interfaces/ITimer';
import { useEffect } from "react";

const ONE_SECOND = 1000;

export default function Timer ({ selectedTask, timeHandler }: { selectedTask: ITask, timeHandler?: ITimer }) {
    

    useEffect(() => {
        if (selectedTask?.time) {
            timeHandler?.setTimer(timeToSeconds(selectedTask.time))
        }
    }, [selectedTask]);

    const setRegression = (counter: number = 0) => {
        setTimeout(() => {
            if (counter > 0 ) {
                timeHandler?.setTimer(counter - 1); 
               return setRegression(counter - 1);
            }
        }, ONE_SECOND);
    };

    return (
        <div className={timerStyle["timer"]}>
            <p className={timerStyle["timer-title"]}>Choose a Todo and Start the timer</p>
            {selectedTask && <p>{selectedTask.task}</p>}
            <div className={timerStyle["clock-container"]}>
                <Clock time={timeHandler?.time} />
            </div>
            <Button typeAndAction={{type: "submit", onClick: () => setRegression(timeHandler?.time)}}>
                Start
            </Button>
        </div>
    )
}