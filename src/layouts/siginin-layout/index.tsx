import { Logo } from "@/components/core/logo";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { ReactNode,JSX } from "react";
import { useTranslation } from "react-i18next";
import { ArrowSquareUpRight } from "@phosphor-icons/react/dist/ssr/ArrowSquareUpRight";
import { PaperPlaneTilt  } from "@phosphor-icons/react/dist/ssr/PaperPlaneTilt";

export const SigninLayout = ({children}:{children:ReactNode}):JSX.Element => {
    const {t} = useTranslation()
    return (
        <Stack bgcolor="#333" 
            divider={<Divider sx={{bgcolor:"#444",borderWidth:"1.5px"}}/>}>
            <Stack 
                direction="row" 
                justifyContent="flex-start" 
                alignItems="center" 
                padding={1} 
                spacing={1}>
               <Stack direction="row" justifyContent="center" alignItems="center" sx={{flexGrow:1}}>
                    <Logo/>
                    <Typography variant="h1" color="#fff" fontSize="48px" fontWeight="bold">
                        {t("looter")}
                    </Typography>
                </Stack>
               <Stack direction="row" justifyContent="center" alignItems="flex-end">
                <Button sx={{width:"fit-content"}}>
                    <PaperPlaneTilt size={27} color="#fff"/>
                </Button>
                <Button sx={{width:"fit-content"}}>
                    <ArrowSquareUpRight size={27} color="#fff"/>
                </Button>
               </Stack>
            </Stack>
           <Box display="flex" justifyContent="center" alignItems="center" sx={{flexGrow:1}} padding={1}>
            {
                children
            }
           </Box>
        </Stack>
    )
}