import { useEffect, useState } from "react"

export const useCustomState = <T = undefined>(key:string, defaultValue?:T): [T|undefined,(newValue:T|undefined)=>void] => {
    const [state,setState] = useState<T>()
    const setCustomState = (newValue:T|undefined) => {
        if(newValue){
            localStorage.setItem(key, JSON.stringify(newValue))
        }else{
            localStorage.removeItem(key)
        }
        setState(newValue)
    }
    useEffect(()=>{
        if(!state){
            if(defaultValue){
                setCustomState(defaultValue)
            }else{
                const storedValue = localStorage.getItem(key)
                if(storedValue){
                    setCustomState(JSON.parse(storedValue))
                }
            }
        }
    })
    return [state,setCustomState]
}