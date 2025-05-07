import { FormControl, FormHelperText, OutlinedInput } from "@mui/material";
import { ChangeEvent, JSX, KeyboardEvent } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const CustomTextField = ({
    item,
    control,
    errors,
    sx,
    onSubmit,
    onChange
}:{
    item:any,
    control:Control<any>,
    errors:FieldErrors<any>,
    sx:any,
    onSubmit?:()=>void,
    onChange?:(e:ChangeEvent)=>void
}):JSX.Element => {
    const {t} = useTranslation()
    const handleKeyDown = (e:KeyboardEvent) => {
        if(e.code === "Enter" && onSubmit){
            onSubmit()
            e.preventDefault()
        }
    }
    return (
        <Controller control={control}
        name={item.name}
        render={({field})=>(
                <FormControl error={Boolean(errors[item.name])} fullWidth>
                    <OutlinedInput {...field} 
                        placeholder={t(item.placeholder)} 
                        sx={sx} 
                        onKeyDown={handleKeyDown} 
                        onChange={(e)=>{
                            field.onChange(e)
                            if(onChange){
                                onChange(e)
                            }
                        }}
                    />
                    {errors[item.name]?<FormHelperText>{t(String(errors[item.name]?.message))}</FormHelperText>:<></>}
                </FormControl>
            )}
        />
    )
}