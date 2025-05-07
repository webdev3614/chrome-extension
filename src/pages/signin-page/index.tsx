import { Spinner } from "@/components/core/loading";
import { SigninForm } from "@/components/signin";
import { useAuth } from "@/context/auth-provider/hooks";
import { Box } from "@mui/material";
import { JSX, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SigninPage = ():JSX.Element => {
    const {auth,loading} = useAuth()
    const navigate = useNavigate()
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