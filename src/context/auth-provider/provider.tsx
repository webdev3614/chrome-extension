import { ReactNode,JSX } from "react";
import AuthContext, { Auth } from "./context";
import { postData } from "@/api/axios";
import { toast } from "react-toastify";
import { useCustomState } from "@/hooks/use-state";

const AuthProvider = ({children}:{children:ReactNode}):JSX.Element => {
    const [auth,setAuth] = useCustomState<Auth>("auth")
    const [loading,setLoading] = useCustomState<boolean>("auth.loading")
    const [error,setError] = useCustomState<string>("auth.error")
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
        <AuthContext.Provider value={{auth, loading: loading || false, error, signin}}>
            {
                children
            }
        </AuthContext.Provider>
    )
}

export default AuthProvider