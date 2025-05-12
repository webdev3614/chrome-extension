import { Spinner } from "@/components/core/loading";
import { SigninForm } from "@/components/signin";
import { useAuth } from "@/context/auth-provider/hooks";
import { useCustomNavigate } from "@/hooks/use-navigate";
import { Box } from "@mui/material";
import { JSX, useEffect } from "react";

export const SigninPage = ():JSX.Element => {
    const {auth,loading} = useAuth()
    const navigate = useCustomNavigate()
    useEffect(()=>{
        if(auth){
            navigate('/home')
        }
    })
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <SigninForm/>
            <Spinner loading={loading}/>
        </Box>
    )
}