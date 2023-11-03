interface ITask {
    id?: string
    task?: string
    time?: string
    taskSelected?: boolean
    taskCompleted?: boolean
}

interface ITaskProp {
    tasks: ITask[]
    taskSelection: () => void
}

interface ITaskItem extends ITask {
    taskSelection: () => void
}
export type { ITaskProp, ITask, ITaskItem };