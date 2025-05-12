import { Logo } from "@/components/core/logo";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { ReactNode,JSX } from "react";
import { UsersThree } from "@phosphor-icons/react/dist/ssr/UsersThree";
import { ArrowsClockwise } from "@phosphor-icons/react/dist/ssr/ArrowsClockwise";
import { FrameCorners } from "@phosphor-icons/react/dist/ssr/FrameCorners";
import { useTranslation } from "react-i18next";
import { CustomButton } from "@/components/core/button";
import { useChain } from "@/context/chain-provider/hooks";
import { UI } from "./trade-layout-ui";
import { UIRender } from "@/components/core/ui-render";
import { useForm } from "react-hook-form";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const defaultValues = {
    chain:1399811149
}

const schema = zod.object({
    chain:zod.number()
})

export const TradeLayout = ({children}:{children:ReactNode}):JSX.Element => {
    const {t} = useTranslation()
    const {chains} = useChain()
    const {control,formState:{errors},handleSubmit} = useForm({
        defaultValues,
        resolver: zodResolver(schema)
    })
    const onSubmit = (value:any) => {
        console.log(value)
    }
    return (
        <Stack sx={{width:"360px", height:"600px"}} divider={<Divider sx={{bgcolor:"#363636",borderWidth:"1.5px"}}/>}>
            <Stack direction="row" padding={1}>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{flexGrow:1}}>
                    <Logo/>
                    <Typography variant="h1" color="#f4f2f3" fontSize="30px" fontWeight="bold">
                        {t("looter")}
                    </Typography>
                </Stack>
                <Stack sx={{flexGrow:1}}>
                     
                </Stack>
                <Stack  direction="row" justifyContent="flex-end" alignItems="center">
                    <CustomButton 
                        startIcon={ <UsersThree color="#ff6624"/>} 
                        sx={{
                            color:"#f4f2f3",
                            bgcolor:"#363636",
                            borderRadius:"15px",
                            width:"93px",
                            height:"24px",
                            fontSize:"12px"
                        }}>
                       {t("referrals")}
                    </CustomButton>
                    <Button sx={{minWidth:"24px", minHeight:"24px"}}>
                        <ArrowsClockwise size="18px" color="#f4f2f3"/>
                    </Button>
                    <Button sx={{minWidth:"24px", minHeight:"24px"}}>
                        <FrameCorners size="18px" color="#f4f2f3"/>
                    </Button>
                </Stack>
            </Stack>
            <Stack direction="row" sx={{flexGrow:1,height:"64px",justifyContent:"space-between", alignItems:"center"}}>
                   <form onSubmit={handleSubmit(onSubmit)}>
                   {
                        UI.map((item)=>{
                            const updatedItem = item.name === "chain"?{...item,options:chains?.map((val)=>({
                                label:val.name,
                                value:val.chain_id
                            }))}:item
                            return <UIRender 
                                control={control} 
                                sx={{
                                    color:"#f4f2f3",
                                    bgcolor:"#363636", 
                                    borderRadius:"15px",
                                    width:"150px",
                                    height:"40px",
                                    fontSize:"18px"
                                }} 
                                errors={errors} 
                                item={updatedItem}
                            />
                        })
                    }  
                    </form>     
            </Stack>
            <Stack sx={{flexGrow:1,height:"100%"}}>
                {
                    children
                }
            </Stack>
            <Stack direction="row" sx={{height:"48px"}}>
                
            </Stack>
        </Stack>
    )
}