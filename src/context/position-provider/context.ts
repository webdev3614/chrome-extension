import { createContext } from "react";
import { BasicContextType } from "../basic-context-type";

export interface TokenInfo {
    name: string,
    decimals: number,
    symbol: string,
    logo: string,
    mint_authority: string|undefined,
    freeze_authority: string|undefined,
}

export interface Position {
    chain_id: number,
    token_mint: string,
    holding_value: number,
    upnl: number,
    native_price: number,
    token_price: number,
    token_info: TokenInfo,
}

export interface PositionContextType extends BasicContextType {
    positions: Position[]| undefined,
    loadPositions: (chainId:number) => void
}

const PositionContext = createContext<PositionContextType|undefined>(undefined)

export default PositionContext