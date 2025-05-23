import { Box, SxProps, Theme } from "@mui/material";
import { JSX } from "react";

const WIDTH = 160
const HEIGHT = 90

export const CoinIcon = ({id,sx,width = WIDTH,height = HEIGHT}:{id:number,sx?:SxProps<Theme>,width?:number,height?:number}): JSX.Element => {
    const src =  `/assets/${id}.svg`;
    return (
        <Box component="img" src={src} width={width} height={height} sx={sx} alt="coin svg"/>
    )
}