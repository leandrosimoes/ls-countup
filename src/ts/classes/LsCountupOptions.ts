import LsCountupSufixes from './LsCountupSufixes'

export default class LsCountupOptions {
    targetDate: Date
    onStart: Function
    onStop: Function
    onTick: Function
    sufixes: LsCountupSufixes

    constructor({
        targetDate = new Date(),
        onStart = () => {},
        onStop = () => {},
        onTick = () => {},
        sufixes = new LsCountupSufixes({}),
    }: any = {}) {
        this.targetDate = targetDate
        this.onStart = onStart
        this.onStop = onStop
        this.onTick = onTick
        this.sufixes = sufixes
    }
}
