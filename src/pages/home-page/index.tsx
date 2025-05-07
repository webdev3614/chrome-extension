import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

export const HomePage = ():JSX.Element => {
    const {t} = useTranslation()
    return (
        <Box>
            <Typography variant="h1" color="#fff">
                {t("looter")}
            </Typography>
        </Box>
    )
}