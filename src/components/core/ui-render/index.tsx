import { JSX } from "react";
import { Control, FieldErrors } from "react-hook-form";
import { UIType } from "./types";
import { CustomTextField } from "./textfield";
import { SxProps } from "@mui/material";
import { CustomSelect } from "./select";

export const UIRender = ({item,control,errors,sx,onSubmit,onChange}:{ item:any, control:Control<any>,errors:FieldErrors<any>,sx?:SxProps,onSubmit?:()=>void,onChange?:(e:any)=>void}):JSX.Element => {
    switch(item.type) {
        case UIType.TEXTFIELD:
            return (
                <CustomTextField 
                    item={item} 
                    control={control} 
                    errors={errors} 
                    sx={sx} 
                    onSubmit={onSubmit} 
                    onChange={onChange}
                />
            )
        case UIType.SELECT:
            return <CustomSelect 
                        item={item} 
                        control={control} 
                        errors={errors} 
                        sx={sx}
                        onChange={onChange}
                    />
        default:
            return (<></>)
    }
}