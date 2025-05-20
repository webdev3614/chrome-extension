import { createContext } from "react";
import { BasicContextType } from "../basic-context-type";

export interface WalletInfo {
    chain_id: number,
    wallet_index:number,
    balance: number,
    address: string
}

export interface WalletContextType extends BasicContextType {
    wallets: WalletInfo[]|undefined
}

const WalletContext = createContext<WalletContextType|undefined>(undefined)

export default WalletContext