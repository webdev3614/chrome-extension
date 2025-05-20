import { Position } from "@/context/position-provider/context";
import { formatNumber } from "@/utils/math";
import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";
import { JSX, MouseEvent } from "react";
import { Copy } from "@phosphor-icons/react/dist/ssr/Copy";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const PositionCard = ({position}:{position:Position}):JSX.Element => {
    const {t} = useTranslation()
    const pnl_color = position.upnl > 0 ? "#00FF00" : "#FF0000"
    console.log("position", position)
    const handleCopy = (e:MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText(position.token_mint)
        e.preventDefault()
        e.stopPropagation()
        toast.info(t("token_address_copied"))
    }
    return (
        <Card sx={{
            flexGrow:1,
            padding:2,
            maxHeight:"fit-content",
            bgcolor:"#32383E",
            borderRadius:"16px"
        }}>
            <Stack direction="row" spacing={1}>
                <Stack sx={{width:"48px"}}>
                    <Box  display="flex" sx={{height:"100%"}} justifyContent="center" alignItems="center">
                        <Avatar src={position.token_info.logo} />
                    </Box>
                </Stack>
                <Stack sx={{width:"164px"}}>
                    <Typography variant="h5" fontSize={24} color="#f4f2f3" sx={{height:"29px"}}>
                        {position.token_info.name}
                    </Typography>
                    <Stack
                        direction="row"
                        sx={{height:"22px"}}
                        justifyContent="flex-start"
                        alignItems="center">
                        <Typography variant="body1" fontSize={18} color="#636B74">
                            {`${formatNumber(position.holding_value / position.token_price,2)} ${position.token_info.symbol}`}
                        </Typography>
                        <Button sx={{ 
                                minWidth:"12px",
                                minHeight: "12px"
                            }}
                            onClick={handleCopy}>
                            <Copy/>
                        </Button>
                    </Stack>
                </Stack>
                <Stack sx={{width:"69px"}}>
                    <Typography variant="body1" color="#f4f2f3" fontSize={18} sx={{height:"29px"}}>
                        ${formatNumber(position.holding_value,2)}
                    </Typography>
                    <Typography variant="body1" fontSize={18} sx={{color: pnl_color,height:"22px"}}>
                        ${formatNumber(position.upnl,2,{isSign:true})}
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    )
}