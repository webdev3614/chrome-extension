import { ReactNode,JSX, useState, useEffect } from "react";
import SettingsContext, { Settings } from "./context";
import { app } from "@/config";

const SettingsProvider = ({children}:{children:ReactNode}):JSX.Element => {
    const [settings,setSettings] = useState<Settings>()
    const [loading,setLoading] = useState<boolean>(true)
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
    },[settings])
    return (
        <SettingsContext.Provider value={{settings,loading,error}}>
            {
                children
            }
        </SettingsContext.Provider>
    )
}

export default SettingsProvider