import { Box, SxProps, Theme } from "@mui/material";
import { JSX } from "react";

const WIDTH = 160
const HEIGHT = 90

export const Solana = ({sx,width = WIDTH,height = HEIGHT}:{sx?:SxProps<Theme>,width?:number,height?:number}): JSX.Element => {
    const src = "/assets/solana.svg";
    return (
        <Box component="img" src={src} width={width} height={height} sx={sx} alt="solana"/>
    )
}