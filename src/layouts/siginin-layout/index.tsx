import { Logo } from "@/components/core/logo";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { ReactNode,JSX } from "react";
import { useTranslation } from "react-i18next";
import { ArrowSquareUpRight } from "@phosphor-icons/react/dist/ssr/ArrowSquareUpRight";
import { PaperPlaneTilt  } from "@phosphor-icons/react/dist/ssr/PaperPlaneTilt";
import { useNavigate } from "react-router-dom";

export const SigninLayout = ({children}:{children:ReactNode}):JSX.Element => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const handleDragableDialog = () => {
       navigate("/trade")
    }
    return (
        <Stack
            divider={<Divider sx={{bgcolor:"#363636",borderWidth:"1.5px"}}/>}
            width="391px" 
            height="200px">
            <Stack 
                direction="row" 
                justifyContent="flex-start" 
                alignItems="center" 
                padding={1} 
                spacing={1}>
                <Stack direction="row" justifyContent="flex-end" alignItems="center" sx={{flexGrow:1}}>
                    <Logo/>
                    <Typography variant="h1" color="#f4f2f3" fontSize="30px" fontWeight="bold">
                        {t("looter")}
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="center" alignItems="flex-end">
                <Button sx={{width:"fit-content"}}>
                    <PaperPlaneTilt size="27px" color="#f4f2f3"/>
                </Button>
                <Button sx={{width:"fit-content"}} onClick={handleDragableDialog}>
                    <ArrowSquareUpRight size="27px" color="#f4f2f3"/>
                </Button>
               </Stack>
            </Stack>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{flexGrow:1, height:"100%"}} padding={1}>
                {
                    children
                }
           </Box>
        </Stack>
    )
}