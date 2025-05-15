import { ReactNode,JSX, useState } from "react";
import TradeContext, { TradeSettings } from "./context";
import { useCustomState } from "@/hooks/use-state";

const TradeProvider = ({children}:{children:ReactNode}):JSX.Element => {
    const [tradeSettings,setTradeSettings] = useCustomState<TradeSettings>("tradeSettings")
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>()
    const updateTradeSettings = (newTradeSettings: TradeSettings) => {
        try {
            setLoading(true)
            setTradeSettings(newTradeSettings)
        } catch (err) {
            setError(`${err}`)
        } finally{
            setLoading(false)
        }
    }
    return (
        <TradeContext.Provider value={{tradeSettings,loading,error,updateTradeSettings}}>
            {children}
        </TradeContext.Provider>
    )
}

export default TradeProvider