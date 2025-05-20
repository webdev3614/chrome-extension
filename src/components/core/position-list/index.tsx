import { useChain } from "@/context/chain-provider/hooks";
import { useTrade } from "@/context/trade-provider/hooks";
import { JSX, useEffect } from "react";
import { Spinner } from "../loading";
import { Stack } from "@mui/material";
import PositionProvider from "@/context/position-provider/provider";
import { usePosition } from "@/context/position-provider/hooks";
import { ChainInfo } from "@/context/chain-provider/context";
import { Position } from "@/context/position-provider/context";
import { PositionCard } from "./position-card";

export const Positions = ({chain}:{chain:ChainInfo}):JSX.Element => {
    const {positions,loadPositions} = usePosition()
    useEffect(()=>{
        if(!positions){
            loadPositions(chain.chain_id)
        }
    })

    return (
        <Stack spacing={1} 
            padding={1}
            sx={{
                flexGrow:1
            }}>
            {
                (positions || []).map((position:Position,index:number)=>{
                    return <PositionCard key={index} position={position}/>
                })
            }
        </Stack>
    )
}

export const PositionList = ():JSX.Element => {
    const {chains} = useChain()
    const {tradeSettings} = useTrade()
    if(chains&&tradeSettings){
        const chain = chains.find((chain)=>chain.chain_id === tradeSettings?.chain_id)
        if(chain) {
            return (
                <PositionProvider>
                    <Positions chain={chain}/>
                </PositionProvider>
            )
        }
    }
    return (
        <Spinner loading={true}/>
    )
}