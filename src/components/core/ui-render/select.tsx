import { FormControl, MenuItem, Select, SelectChangeEvent, Stack, SxProps, Typography } from "@mui/material";
import { JSX } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Solana } from "../svg-icon/solana";

export const CustomSelect = ({item,control,errors,sx,onChange}:{
    item:any,
    control:Control<any>,
    errors:FieldErrors<any>,
    sx?:SxProps,
    onChange?:(e:SelectChangeEvent)=>void
}):JSX.Element => {
    const {t} = useTranslation()
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
                        field.onChange(e)
                        if(onChange){
                            onChange(e)
                        }
                    }}>
                    {
                        item.options.map((option:any)=>{
                            return (
                                <MenuItem key={option.value} 
                                    value={option.value}
                                    sx={{bgcolor:"#363636"}}>
                                    <Stack direction="row" spacing={1} sx={{justifyContent:"flex-start",alignItems:"center"}}>
                                        <Solana width={24} height={24}/>
                                        <Typography sx={{color:"#f4f2f3"}}>
                                            {t(option.label)}
                                        </Typography>
                                    </Stack>
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