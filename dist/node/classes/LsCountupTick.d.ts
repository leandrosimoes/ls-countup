export default class LsCountupTick {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    constructor({ days, hours, minutes, seconds }: {
        days?: string;
        hours?: string;
        minutes?: string;
        seconds?: string;
    });
}
