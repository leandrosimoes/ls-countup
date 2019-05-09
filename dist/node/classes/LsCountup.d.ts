import LsCountupSufixes from '../classes/LsCountupSufixes';
import LsCountupTick from '../classes/LsCountupTick';
import LsCountupOptions from '../classes/LsCountupOptions';
export default class LsCountup {
    targetDate: Date;
    onStart: Function;
    onStop: Function;
    onTick: Function;
    sufixes: LsCountupSufixes;
    protected COUNTUP_INTERVAL: any;
    protected CURRENT_TIME: LsCountupTick;
    constructor(options: LsCountupOptions);
    private validateTargetDate;
    private isLeapYear;
    private doTick;
    stop(): void;
    start(): void;
    changeTargetDate(targetDate?: Date): void;
}
