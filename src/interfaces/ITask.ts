interface ITask {
    id?: string
    task?: string
    time?: string
    taskSelected?: boolean
    taskCompleted?: boolean
}

interface ITaskListProps {
    tasks: ITask[]
    taskSelection: (task: ITask) => void
    taskToDelete: (id: string) => void

}

interface ITaskItemActions extends ITask {
    taskSelection: (task: ITask) => void
    taskToDelete: (id: string) => void
}

export type { ITaskListProps, ITask, ITaskItemActions };