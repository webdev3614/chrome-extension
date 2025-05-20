import { Box, Button, FormControl, MenuItem, Select, Stack, SxProps, Typography } from "@mui/material";
import { JSX, MouseEvent } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { CoinIcon } from "../svg-icon/coin";
import { Wallet } from "@phosphor-icons/react/dist/ssr/Wallet";
import { Copy } from "@phosphor-icons/react/dist/ssr/Copy";
import { toast } from "react-toastify";

const RenderMenuItem = ({category,option,type}:{category:string,option:any,type:string}):JSX.Element => {
    const {t} = useTranslation()
    const handleCopy = (e:MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText(option.address)
        e.preventDefault()
        e.stopPropagation()
        toast.info(t("wallet_address_copied"))
    }
    switch(category){
        case "chain":
            return (
                <Stack direction="row" spacing={1} sx={{justifyContent:"flex-start",alignItems:"center"}}>
                   <Box sx={{ 
                        bgcolor:"#000", 
                        borderRadius:"50%", 
                        minWidth:"24px", 
                        minHeight:"24px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <CoinIcon id={option.value} width={14} height={14}/>
                   </Box>
                    <Typography sx={{
                        fontSize:"18px",
                        color:"#f4f2f3"
                    }}>
                        {t(option.label)}
                    </Typography>
                </Stack>
            )
        case "wallet":
            return (
                <Stack direction="row" spacing={1} sx={{justifyContent:"flex-start",alignItems:"center"}}>
                    {
                        type === "render"?
                        <Wallet/>:
                        <>
                            <Typography sx={{color:"#f4f2f3",fontSize:"18px"}}>
                                {`W${option.value}`}
                            </Typography>
                            <Button onClick={handleCopy} 
                                sx={{
                                    minWidth:"12px",
                                    minHeight: "12px"
                                }}>
                                <Copy color="#f4f3f3"/>
                            </Button>
                        </>
                    }
                    <CoinIcon id={option.chain_id} width={14} height={14}/>
                    <Typography sx={{
                        fontSize:"18px",
                        color:"#f4f2f3"
                    }}>
                        {t(option.label)}
                    </Typography>
                </Stack>
            )
        default:
            return (
                <Stack direction="row" spacing={1} sx={{justifyContent:"flex-start",alignItems:"center"}}>
                    <CoinIcon id={option.chain_id} width={14} height={14}/>
                    <Typography sx={{
                        fontSize:"18px",
                        color:"#f4f2f3"
                    }}>
                        {t(option.label)}
                    </Typography>
                </Stack>
            )
    }
}

export const CustomSelect = ({item,control,errors,sx,onSubmit}:{
    item:any,
    control:Control<any>,
    errors:FieldErrors<any>,
    sx?:SxProps,
    onSubmit?:()=>void
}):JSX.Element => {
    return (
        <Controller control={control}
            name={item.name}
            render={({field})=>(
                <FormControl error={Boolean(errors[item.name])} sx={{justifyContent:"center",alignItems:"center"}} fullWidth>
                    <Select {...field} 
                        displayEmpty 
                        sx={sx}
                        MenuProps={{
                            PaperProps:{
                                sx:{
                                    bgcolor:"#363636"
                                }
                            }
                        }}
                        value={field.value}
                        onChange={(e)=>{
                            field.onChange(e.target.value)
                            if(onSubmit){
                                onSubmit()
                            }
                        }}
                        renderValue={(selected)=>{
                            const selectedOption = item.options.find((option:any)=> option.value === selected)
                            return (
                                <RenderMenuItem category={item.category} option={selectedOption} type="render"/>
                            )
                        }}>
                        {
                            item.options.map((option:any)=>{
                                return (
                                    <MenuItem value={option.value}
                                        sx={{bgcolor:"#363636"}}>
                                        <RenderMenuItem key={option.value} category={item.category} option={option} type="menu"/>
                                    </MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
            )}
        />
    )
}