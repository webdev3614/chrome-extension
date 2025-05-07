import { Backdrop, GlobalStyles } from "@mui/material";
import { ScaleLoader } from "react-spinners";
import { JSX } from "react";

export const Spinner = ({loading}:{loading: boolean}):JSX.Element => {
    return (
        <>
            <GlobalStyles styles={{ body: {
                "--mui-palette-Backdrop-bg":"#55555555"
            }}}/>
            <Backdrop open={loading} sx={{zIndex:1000}}>
                <ScaleLoader/>
            </Backdrop>
        </>
    )
}