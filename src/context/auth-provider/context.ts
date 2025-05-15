import { createContext } from "react"
import { BasicContextType } from "../basic-context-type"

export interface Auth{
    token: string
}

export interface AuthContextType extends BasicContextType {
    auth: Auth | undefined,
    signin:(accessCode:string) => void,
    initAuth:()=>void
}

const AuthContext = createContext<AuthContextType|undefined>(undefined)

export default AuthContext
