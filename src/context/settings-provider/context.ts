import { createContext } from "react";
import { BasicContextType } from "../basic-context-type";

export interface Settings {
    language: string
}

export interface SettingsContextType extends BasicContextType {
    settings: Settings | undefined
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export default SettingsContext