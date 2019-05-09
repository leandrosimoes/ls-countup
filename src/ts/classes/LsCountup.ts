import LsCountupSufixes from '../classes/LsCountupSufixes'
import LsCountupTick from '../classes/LsCountupTick'
import LsCountupOptions from '../classes/LsCountupOptions';

export default class LsCountup {
    targetDate: Date
    onStart: Function
    onStop: Function
    onTick: Function
    sufixes: LsCountupSufixes

    protected COUNTUP_INTERVAL: any
    protected CURRENT_TIME: LsCountupTick;

    constructor(options: LsCountupOptions) {
        this.validateTargetDate(options.targetDate)

        this.targetDate = options.targetDate
        this.onStart = options.onStart
        this.onStop = options.onStop
        this.onTick = options.onTick
        this.sufixes = options.sufixes

        this.CURRENT_TIME = new LsCountupTick({});
    }

    private validateTargetDate(targetDate: Date): void {
        if (targetDate >= new Date()) throw new Error("The target date must be a backward date")
    }

    private isLeapYear(year:number) {
      return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    private doTick(callback: Function | undefined) {
        let current_date = new Date()
        let current_year = current_date.getFullYear()
        let seconds_left = (current_date.getTime() - this.targetDate.getTime()) / 1000
        let years: any, days: any, hours: any, minutes: any, seconds: any

        years = Math.floor(seconds_left / 31536000)
        debugger

        if (years > 0) {
            for (let i = 1; i <= years; i++) {
                seconds_left -= this.isLeapYear(current_year - i) ? 31622400 : 31536000
            }
        }

        days = Math.floor(seconds_left / 86400)
        seconds_left -= days * 86400

        hours = Math.floor(seconds_left / 3600) % 24
        seconds_left -= hours * 3600

        minutes = Math.floor(seconds_left / 60) % 60
        seconds_left -= minutes * 60

        seconds = Math.floor(seconds_left % 60)

        years = parseInt((years > 0 ? (years > 9 ? years : `0${years}`) : '00')).toString() + this.sufixes.years
        days = parseInt((days > 0 ? (days > 9 ? days : `0${days}`) : '00')).toString() + this.sufixes.days
        hours = parseInt((hours > 0 ? (hours > 9 ? hours : `0${hours}`) : '00')).toString() + this.sufixes.hours
        minutes = parseInt((minutes > 0 ? (minutes > 9 ? minutes : `0${minutes}`) : '00')).toString() + this.sufixes.minutes
        seconds = parseInt((seconds > 0 ? (seconds > 9 ? seconds : `0${seconds}`) : '00')).toString() + this.sufixes.seconds

        this.CURRENT_TIME = new LsCountupTick({ years, days, hours, minutes, seconds })

        if (typeof callback === 'function') callback(this.CURRENT_TIME)
    }

    stop(): void {
        if (!!this.COUNTUP_INTERVAL) {
            clearInterval(this.COUNTUP_INTERVAL)

            if (typeof this.onStop === 'function') this.onStop({ ...this.CURRENT_TIME })
        }
    }

    start(): void {
        this.doTick(this.onStart)

        this.COUNTUP_INTERVAL = setInterval(() => {
            this.doTick(this.onTick)
        }, 1000)
    }

    changeTargetDate(targetDate = new Date()): void {
        this.validateTargetDate(targetDate)

        this.stop.bind(this).call()

        this.targetDate = targetDate

        this.start.bind(this).call()
    }
}