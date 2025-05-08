import { Solana } from "@/components/core/svg-icon/solana";
import { Button, Stack } from "@mui/material";
import { ReactNode,JSX } from "react";
import { ArrowsClockwise } from "@phosphor-icons/react/dist/ssr/ArrowsClockwise";
import { ArrowSquareUpRight } from "@phosphor-icons/react/dist/ssr/ArrowSquareUpRight";

export const TradeLayout = ({children}:{children:ReactNode}):JSX.Element => {
    return (
        <Stack>
            <Stack direction="row" padding={1} bgcolor="#111">
                <Solana sx={{borderRadius:"50%",bgcolor:"#000",padding:1}} width={40} height={40}/>
                <Stack sx={{flexGrow:1}}>

                </Stack>
                <Stack  direction="row" justifyContent="end" alignItems="center">
                    <Button>
                        <ArrowsClockwise size={32} color="#aaa"/>
                    </Button>
                    <Button>
                        <ArrowSquareUpRight size={32} color="#aaa"/>
                    </Button>
                </Stack>
            </Stack>
            <Stack>
                {
                    children
                }
            </Stack>
            <Stack>
                
            </Stack>
        </Stack>
    )
}