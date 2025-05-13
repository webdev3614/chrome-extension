import { useContext } from "react"
import WalletContext, { WalletContextType } from "./context"

export const useWallet = ():WalletContextType => {
    const walletContext = useContext(WalletContext)
    if(!walletContext){
        throw new Error("useWallet must be used within a WalletProvider")
    }
    return walletContext
}