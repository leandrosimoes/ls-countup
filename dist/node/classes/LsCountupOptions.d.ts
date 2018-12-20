import LsCountupSufixes from "./LsCountupSufixes";
export default class LsCountupOptions {
    targetDate: Date;
    onStart: Function;
    onStop: Function;
    onTick: Function;
    sufixes: LsCountupSufixes;
    constructor({ targetDate, onStart, onStop, onTick, sufixes }?: any);
}
