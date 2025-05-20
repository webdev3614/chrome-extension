import { PositionList } from "@/components/core/position-list";
import { CoinIcon } from "@/components/core/svg-icon/coin";
import { useChain } from "@/context/chain-provider/hooks";
import { useTrade } from "@/context/trade-provider/hooks";
import { useWallet } from "@/context/wallet-provider/hooks";
import { formatNumber, readableNumber } from "@/utils/math";
import { Button, Stack, Typography } from "@mui/material";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

export const TradePage = ():JSX.Element => {
    const {t} = useTranslation()
    const {chains} = useChain()
    const {tradeSettings} = useTrade()
    const {wallets} = useWallet()

    if(chains&&wallets&&tradeSettings){
        const chain = chains.find((chain)=>chain.chain_id === tradeSettings?.chain_id)
        const totalBalance = wallets.reduce((sum,wallet)=>{
            return sum + 1*wallet.balance
        },0)
        return (
            <Stack sx={{flexGrow:1}}>
                <Stack
                    sx={{flexGrow:1}} 
                    padding={1}>
                    <Stack justifyContent="center" alignItems="center" padding={5}>
                        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                            <Typography variant="body1" fontWeight="bold" fontSize={32} color="#f4f2f3">
                                {
                                    chain?formatNumber(readableNumber(totalBalance,chain.decimals),2):0
                                }
                            </Typography>
                            {
                                chain?<CoinIcon id={chain.chain_id} width={32} height={25}/>:undefined
                            }
                        </Stack>
                        <Typography variant="body2" fontSize={24} color="#3ded47">
                            +105.55
                        </Typography>
                    </Stack>
                    <Stack direction="row" 
                        sx={{flexGrow:1}} 
                        spacing={2}
                        justifyContent="center"
                        alignItems="center">
                        <Button variant="contained" sx={{bgcolor:"#555",color:"#f4f2f3"}}>
                            {t("buy")}
                        </Button>
                        <Button variant="contained" sx={{bgcolor:"#555",color:"#f4f2f3"}}>
                            {t("sell")}
                        </Button>
                        <Button variant="contained" sx={{bgcolor:"#555",color:"#f4f2f3"}}>
                            {t("send")}
                        </Button>
                    </Stack>
                    <Stack spacing={1} 
                        sx={{
                           flexGrow:1,
                            height:"100%",
                            overflowY:"auto",
                            overflowX:"hidden",
                        }}>
                        <PositionList/>
                    </Stack>
                </Stack>
                <Stack>
                    <Stack>

                    </Stack>
                    <Stack>
                        
                    </Stack>
                </Stack>
            </Stack>
        )
    }else{
        return <></>
    }
}