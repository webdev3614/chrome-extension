import { ReactNode,JSX, useState } from "react";
import AuthContext, { Auth } from "./context";
import { postData } from "@/api/axios";
import { toast } from "react-toastify";
import { useCustomState } from "@/hooks/use-state";

const AuthProvider = ({children}:{children:ReactNode}):JSX.Element => {
    const [auth,setAuth] = useCustomState<Auth>("auth")
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>()
    const handleError = (err:string) => {
        toast.error(err)
        setError(err as string)
    }
    const signin = (accessCode:string) => {
        setLoading(true)
        postData("/auth/signin",{access_code:accessCode}).then((result)=>{
            if(result.err){
                handleError(result.err)
            }else{
                setAuth(result.data.data)
            }
        }).catch((err)=>{
            handleError(err)
        }).finally(()=>{
            setLoading(false)
        })
    }
    return (
        <AuthContext.Provider value={{auth, loading, error, signin}}>
            {
                children
            }
        </AuthContext.Provider>
    )
}

export default AuthProvider