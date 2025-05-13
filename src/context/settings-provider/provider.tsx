import { ReactNode,JSX, useEffect, useState } from "react";
import SettingsContext, { Settings } from "./context";
import { app } from "@/config";
import { useCustomState } from "@/hooks/use-state";

const SettingsProvider = ({children}:{children:ReactNode}):JSX.Element => {
    const [settings,setSettings] = useCustomState<Settings>("settings")
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>()
    useEffect(()=>{
        if(!settings){
            setLoading(true)
            try {
                setSettings(app)
            } catch (error) {
                setError(error as string)
            } finally {
                setLoading(false)
            }
        }
    },[settings,setSettings])
    return (
        <SettingsContext.Provider value={{settings,loading,error}}>
            {
                children
            }
        </SettingsContext.Provider>
    )
}

export default SettingsProvider