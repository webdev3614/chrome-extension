import { useAuth } from "@/context/auth-provider/hooks";
import { useCustomNavigate } from "@/hooks/use-navigate";
import { Box, Stack, Typography } from "@mui/material";
import { JSX, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr/PaperPlaneTilt";

export const HomePage = ():JSX.Element => {
    const {t} = useTranslation()
    const {auth} = useAuth()
    const navigate = useCustomNavigate()
    useEffect(()=>{
        if(!auth){
            navigate('/')
        }
    })
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
           <Stack 
            direction="row"
            sx={{
                    color:"#f4f2f3",
                    borderRadius:"15px",
                    fontSize:"12px",
                    padding:"5px 20px",
                    justifyContent:"center",
                    alignItems:"center",
            }}>
                <PaperPlaneTilt />
                <Typography sx={{padding:"0px 5px"}}>
                    {t("connected")}
                </Typography>
           </Stack>
        </Box>
    )
}