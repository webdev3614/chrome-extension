import { useContext } from "react"
import SettingsContext, { SettingsContextType } from "./context"

export const useSettings = ():SettingsContextType => {
    const settingsContext = useContext(SettingsContext)
    if(!settingsContext){
        throw new Error("useSettings must be used within a SettingsProvider")
    }
    return settingsContext
}