import { createContext } from "react";
import { BasicContextType } from "../basic-context-type";

export interface TradeSettings {
    chain_id: number,
    wallet_index: number
}

export interface TradeContextType extends BasicContextType {
    tradeSettings:TradeSettings|undefined,
    updateTradeSettings: (newTradeSettings:TradeSettings) => void
}

const TradeContext = createContext<TradeContextType|undefined>(undefined);

export default TradeContext