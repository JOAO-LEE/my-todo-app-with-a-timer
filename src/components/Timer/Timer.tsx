import Button from "../Button/Button";
import Clock from "./Clock/Clock";

export default function Timer () {

    return (
        <div>
            <p>Choose a Todo and Start the timer</p>
            <div>
                <Clock />
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}