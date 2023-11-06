interface ITask {
    id?: string
    task?: string
    time?: string
    taskSelected?: boolean
    taskCompleted?: boolean
}

interface ITaskListProps {
    tasks: ITask[]
    selectTask: (task: ITask) => void
    deleteTask: (id: string) => void

}

interface ITaskItemActions extends ITask {
    selectTask: (task: ITask) => void
    deleteTask: (id: string) => void
}


export type { ITaskListProps, ITask, ITaskItemActions };