import { BasicContextType } from "../basic-context-type";

export interface TradeSettings {
    walletIndex: number,
    base_token: string,
    quote_token: string,
}

export interface TradeContextType extends BasicContextType {
    tradeSettings:TradeSettings
}