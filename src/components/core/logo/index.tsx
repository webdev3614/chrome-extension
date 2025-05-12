import { Box } from "@mui/material";
import { JSX } from "react";

const WIDTH = 59
const HEIGHT = 59

export const Logo = ({isDark = false,width = WIDTH,height = HEIGHT}:{isDark?:boolean,width?:number,height?:number}): JSX.Element => {
    const src = isDark ? "/assets/logo-dark.svg" : "/assets/logo-light.svg";
    return (
        <Box component="img" src={src} width={width} height={height} alt="logo"/>
    )
}