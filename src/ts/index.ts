import LsCountup from './classes/LsCountup'
import LsCountupOptions from './classes/LsCountupOptions'
import LsCountupSufixes from './classes/LsCountupSufixes'
import LsCountupTick from './classes/LsCountupTick'

;((window: any) => {
    window.LsCountup = LsCountup
    window.LsCountupOptions = LsCountupOptions
    window.LsCountupSufixes = LsCountupSufixes
    window.LsCountupTick = LsCountupTick
})(typeof window !== typeof undefined ? window : {})

export { LsCountup, LsCountupOptions, LsCountupSufixes, LsCountupTick }
