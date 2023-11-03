import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import timerStyle from './timer-style.module.scss';
// import timerStyle from './timer-style.module.scss';


export default function Timer () {

    return (
        <div className={timerStyle["timer"]}>
            <p className={timerStyle["timer-title"]}>Choose a Todo and Start the timer</p>
            <div className={timerStyle["clock-container"]}>
                <Clock />
            </div>
            <Button type="submit">
                Start
            </Button>
        </div>
    )
}