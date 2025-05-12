import { Stack } from "@mui/material";
import { ReactNode,JSX } from "react";

export const MainLayout = ({children}:{children:ReactNode}):JSX.Element => {
    return (
        <Stack bgcolor="#262626">
            {children}
        </Stack>
    )
}