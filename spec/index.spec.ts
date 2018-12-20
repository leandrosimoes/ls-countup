import "jasmine";
import { LsCountup, LsCountupOptions, LsCountupSufixes, LsCountupTick } from '../src/ts/index'

describe('All Validations', () => {
    let _currentYear: number;

    beforeAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10 * 1000;
        _currentYear = new Date().getFullYear()
    })

    it('Must be defined', () => {
        const targetDate: Date = new Date(_currentYear - 1, 1, 1);
        const options = new LsCountupOptions({ targetDate })
        const countup = new LsCountup(options)

        expect(countup).toBeDefined()
        expect(countup).not.toBeUndefined()
    })

    it('On start ticking', done => {
        const onStart = (tick: LsCountupTick) => {
            expect(tick).toBeDefined()
            done()
        }

        const targetDate: Date = new Date(_currentYear - 1, 1, 1);
        const options = new LsCountupOptions({ targetDate, onStart })
        const countup = new LsCountup(options)

        countup.start()
    })

    it('On tick', done => {
        let times: number = 0
        const onTick = (tick: LsCountupTick) => {
            if (times === 5) {
                expect(tick).toBeDefined()
                done()
            }

            times++
        }

        const targetDate: Date = new Date(_currentYear - 1, 1, 1);
        const options = new LsCountupOptions({ targetDate, onTick })
        const countup = new LsCountup(options)

        countup.start()
    })

    it('On stop ticking', done => {
        const onStop = (tick: LsCountupTick) => {
            expect(tick).toBeDefined()
            done()
        }

        const targetDate: Date = new Date(_currentYear - 1, 1, 1);
        const options = new LsCountupOptions({ targetDate, onStop })
        const countup = new LsCountup(options)

        countup.start()
        countup.stop()
    })

    it('Change date', () => {
        const targetDate: Date = new Date(_currentYear - 1, 1, 1);
        const targetDate2: Date = new Date(_currentYear - 2, 1, 1);

        const options = new LsCountupOptions({ targetDate })
        const countup = new LsCountup(options)

        expect(countup.targetDate === targetDate).toBe(true)
        expect(countup.targetDate === targetDate2).toBe(false)

        countup.changeTargetDate(targetDate2)

        expect(countup.targetDate === targetDate).toBe(false)
        expect(countup.targetDate === targetDate2).toBe(true)
    })

    it('Intern validations', () => {
        const rightDate: Date = new Date(_currentYear - 1, 1, 1);
        const wrongTargetDate: Date = new Date(_currentYear + 1, 1, 1);

        expect(() => {
            const options = new LsCountupOptions({ wrongTargetDate })
            const countup = new LsCountup(options)
        }).toThrowError('The target date must be a backward date')

        expect(() => {
            const options = new LsCountupOptions({ rightDate })
            const countup = new LsCountup(options)
            countup.changeTargetDate(wrongTargetDate);
        }).toThrowError('The target date must be a backward date')
    })

    it('Must change sufixes', done => {
        const targetDate: Date = new Date(_currentYear - 1, 1, 1);
        const sufixes = new LsCountupSufixes({ days: ' days', hours: ' hours', minutes: ' minutes', seconds: ' seconds' })

        const onTick = (tick: LsCountupTick) => {
            expect(tick.days.indexOf(sufixes.days)).toBeGreaterThan(-1)
            expect(tick.hours.indexOf(sufixes.hours)).toBeGreaterThan(-1)
            expect(tick.minutes.indexOf(sufixes.minutes)).toBeGreaterThan(-1)
            expect(tick.seconds.indexOf(sufixes.seconds)).toBeGreaterThan(-1)
            done()
        }

        const options = new LsCountupOptions({ targetDate, onStart: undefined, onStop: undefined, onTick, sufixes })
        const countup = new LsCountup(options)
        countup.start()
    })
})