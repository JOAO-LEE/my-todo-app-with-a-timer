export default interface ITimer {
    time: number | undefined
    setTimer: React.Dispatch<React.SetStateAction<number | undefined>>
}