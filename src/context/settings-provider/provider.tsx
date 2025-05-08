import { ReactNode,JSX, useEffect } from "react";
import SettingsContext, { Settings } from "./context";
import { app } from "@/config";
import { useCustomState } from "@/hooks/use-state";

const SettingsProvider = ({children}:{children:ReactNode}):JSX.Element => {
    const [settings,setSettings] = useCustomState<Settings>("settings")
    const [loading,setLoading] = useCustomState<boolean>("settings.loading")
    const [error,setError] = useCustomState<string>("settings.error")
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
    })
    return (
        <SettingsContext.Provider value={{settings,loading: loading || false,error}}>
            {
                children
            }
        </SettingsContext.Provider>
    )
}

export default SettingsProvider