import { useContext } from "react";
import TradeContext, { TradeContextType } from "./context";

export const useTrade = ():TradeContextType => {
    const tradeContext = useContext(TradeContext)
    if(!tradeContext){
        throw new Error("useTrade must be used within a TradeProvider")
    }
    return tradeContext
}