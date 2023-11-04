interface ITask {
    id?: string
    task?: string
    time?: string
    taskSelected?: boolean
    taskCompleted?: boolean
}

interface ITaskProp {
    tasks: ITask[]
    taskSelection: (task: ITask) => void
}

interface ITaskItem extends ITask {
    taskSelection: (task: ITask) => void
}
export type { ITaskProp, ITask, ITaskItem };