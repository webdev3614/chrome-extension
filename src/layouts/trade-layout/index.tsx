import { Logo } from "@/components/core/logo";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { ReactNode,JSX, useEffect } from "react";
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
import { useWallet } from "@/context/wallet-provider/hooks";
import { useTrade } from "@/context/trade-provider/hooks";
import { Spinner } from "@/components/core/loading";

const defaultValues = {
    chain_id: 1399811149,
    wallet_index: 1
}

const schema = zod.object({
    chain_id:zod.number(),
    wallet_index:zod.number()
})

export const TradeLayout = ({children}:{children:ReactNode}):JSX.Element => {
    const {t} = useTranslation()
    const {chains} = useChain()
    const {wallets} = useWallet()
    const {tradeSettings,updateTradeSettings} = useTrade()
    const {control,formState:{errors},reset,handleSubmit} = useForm({
        defaultValues,
        resolver: zodResolver(schema)
    })
    const onSubmit = (value:any) => {
        updateTradeSettings({
            ...tradeSettings,
            chain_id:value.chain_id,
            wallet_index: value.wallet_index
        })
    }
    const onCustomSubmit = () => {
        handleSubmit(onSubmit)()
    }
    console.log("rerender",tradeSettings)
    useEffect(()=>{
        if(tradeSettings){
            reset({
                chain_id:tradeSettings.chain_id,
                wallet_index: tradeSettings.wallet_index
            })
        }
    },[tradeSettings,reset])
    if(chains&&wallets&&tradeSettings){
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction="row" sx={{flexGrow:1,height:"64px",justifyContent:"space-between", alignItems:"center"}}>
                        {
                                UI.map((item)=>{
                                    const updatedItem = item.name === "chain_id"?
                                    {
                                        ...item,
                                        options:chains?chains.map((val)=>({
                                            label:val.name,
                                            value:val.chain_id
                                        })):[]
                                    }:{
                                        ...item,
                                        options:wallets?wallets.map((val)=>({
                                            label:`${val.balance}`,
                                            value:val.wallet_index
                                        })):[]
                                    }
                                    return <UIRender 
                                            key={item.name}
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
                                            onSubmit={onCustomSubmit}
                                        />
                                })
                            }  
                    </Stack>
                </form>     
                <Stack sx={{flexGrow:1,height:"100%"}}>
                    {
                        children
                    }
                </Stack>
                <Stack direction="row" sx={{height:"48px"}}>
                    
                </Stack>
            </Stack>
        )
    }else{
       return (<Spinner loading={true}/>)
    }
}