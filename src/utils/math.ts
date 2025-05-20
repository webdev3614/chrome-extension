
export const format_decimal_number = (num:number,decimals:number):number => {
    const numStr = num.toString()
    const re = new RegExp(`^-?\\d*\\.?0*\\d{0,${decimals}}`)
    const caps = numStr.match(re)
    if(caps){
        const roundedNumStr = caps[0]
        const limit =  roundedNumStr.length - (roundedNumStr.indexOf(".")||0)
        const num = parseFloat(roundedNumStr)
        const result = limit > decimals?num: Math.round(num)
        return result
    }
    return num
}

export interface Option {
    isSign?: boolean
}

export const formatNumber = (num:number,decimals:number,opt?:Option):string => {
    if(num > Math.pow(10,9)) {
        return `${format_decimal_number(num/Math.pow(10,9),decimals)}B`
    } else if(num > Math.pow(10,6)) {
        return `${format_decimal_number(num/Math.pow(10,6),decimals)}M`
    } else if(num > Math.pow(10,3)) {
        return `${format_decimal_number(num/Math.pow(10,3),decimals)}K`
    }
    const result = format_decimal_number(num,decimals)
    if(result === 0) {
        if(decimals === 0) {
            return "-"
        }else{
            const resultStr = "0." + "0".repeat(decimals)
            return resultStr
        }
    }else{
        let sign = ""
        if(opt&&opt.isSign){
            if(result > 0){
                sign =  "+"
            }
        }
        return `${sign}${result}`
    }
}

export const readableNumber = (num:number,decimals:number): number => {
    return num / Math.pow(10,decimals)
}