import { useContext } from "react"
import PositionContext, { PositionContextType } from "./context"

export const usePosition = ():PositionContextType => {
    const positionContext = useContext(PositionContext)
    if(!positionContext){
        throw new Error("usePosition must be used within a PositionProvider")
    }
    return positionContext
}