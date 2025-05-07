import { ChangeEvent, JSX } from "react";
import { Control, FieldErrors } from "react-hook-form";
import { UIType } from "./types";
import { CustomTextField } from "./textfield";

export const UIRender = ({item,control,errors,sx,onSubmit,onChange}:{ item:any, control:Control<any>,errors:FieldErrors<any>,sx?:any,onSubmit?:()=>void,onChange?:(e:ChangeEvent)=>void}):JSX.Element => {
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
        default:
            return (<></>)
    }
}