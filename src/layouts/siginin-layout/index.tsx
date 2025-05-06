import { Stack } from "@mui/material";
import { ReactNode,JSX } from "react";

export const SigninLayout = ({children}:{children:ReactNode}):JSX.Element => {
    return (
        <Stack>
            {
                children
            }
        </Stack>
    )
}