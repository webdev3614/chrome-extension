import { ReactNode,JSX, useState, useEffect } from "react";
import TradeContext, { TradeSettings } from "./context";
import { useCustomState } from "@/hooks/use-state";

const TradeProvider = ({children}:{children:ReactNode}):JSX.Element => {
    const [tradeSettings,setTradeSettings] = useCustomState<TradeSettings>("tradeSettings")
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>()
    const updateTradeSettings = (newTradeSettings: TradeSettings) => {
        setTradeSettings(newTradeSettings)
    }
    return (
        <TradeContext.Provider value={{tradeSettings,loading,error,updateTradeSettings}}>
            {children}
        </TradeContext.Provider>
    )
}

export default TradeProvider