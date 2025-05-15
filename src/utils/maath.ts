
export const format_decimal_number = (num:number,decimals:number):number => {
    const numStr = num.toString()
    const re = new RegExp(`^-?d*.?0*\\d{0.${decimals}}`)
    const caps = numStr.match(re)
    if(caps){
        const roundedNumStr = caps[0]
        const limit =  roundedNumStr.length - (roundedNumStr.indexOf(".")||0)
        const num = parseFloat(roundedNumStr)
        const result = limit > decimals?num: Math.round(num)
        return result
    }
    num
}

export const formatNumber = (num:number,decimals:number):string => {
    return `${num}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,").replace(/\.(\d{0,2})\d+/, ".$1")
}