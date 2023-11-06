import { ITask } from "./ITask"

interface ITimer {
    time: number | undefined
    setTimer: React.Dispatch<React.SetStateAction<number | undefined>>
}
interface ITimerProps {
    handleTime: ITimer,
    selectedTask: ITask
    completeTask: () => void
}

export type { ITimer, ITimerProps}