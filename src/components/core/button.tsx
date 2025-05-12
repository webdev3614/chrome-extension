import { Button, ButtonProps, SxProps } from "@mui/material";
import { JSX, ReactNode } from "react";

type CustomButtonProps = {
    children: string;
    sx?: SxProps;
    startIcon?: ReactNode;
} & ButtonProps

export const CustomButton = ({children,sx,...props}:CustomButtonProps):JSX.Element => {
    return (
        <Button sx={{...sx,textTransform:"none"}} {...props}>
            {
                children
            }
        </Button>
    )
}