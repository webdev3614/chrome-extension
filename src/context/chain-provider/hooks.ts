import { useContext } from "react"
import ChainContext, { ChainContextType } from "./context"

export const useChain = ():ChainContextType => {
    const chainContext = useContext(ChainContext)
    if(!chainContext){
        throw new Error("useChain must be used within a ChainProvider")
    }
    return chainContext
}