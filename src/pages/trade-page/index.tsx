import { Button, Stack, Typography } from "@mui/material";
import { JSX, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const TradePage = ():JSX.Element => {
    const {t} = useTranslation()
    useEffect(()=>{
        
    })
    return (
        <Stack sx={{bgcolor:"#000"}}>
            <Stack  display="flex" 
                sx={{flexGrow:1}} 
                padding={1} 
                justifyContent="center" 
                alignItems="center">
                <Stack justifyContent="center" alignItems="center" padding={5}>
                    <Typography variant="body1" fontWeight="bold" fontSize={32} color="#fff">
                        $1050.55
                    </Typography>
                    <Typography variant="body2" fontSize={24} color="#3ded47">
                        +105.55
                    </Typography>
                </Stack>
                <Stack direction="row" sx={{flexGrow:1}} spacing={2}>
                    <Button variant="contained" sx={{bgcolor:"#555",color:"#fff"}}>
                        {t("buy")}
                    </Button>
                    <Button variant="contained" sx={{bgcolor:"#555",color:"#fff"}}>
                        {t("sell")}
                    </Button>
                    <Button variant="contained" sx={{bgcolor:"#555",color:"#fff"}}>
                        {t("send")}
                    </Button>
                </Stack>
            </Stack>
            <Stack>
                <Stack>

                </Stack>
                <Stack>
                    
                </Stack>
            </Stack>
        </Stack>
    )
}