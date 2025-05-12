import { createContext } from "react";
import { BasicContextType } from "../basic-context-type";

export interface ChainInfo {
    name: string,
    chain_id: number
}

export interface ChainContextType extends BasicContextType {
    chains:ChainInfo[]|undefined
}

const ChainContext = createContext<ChainContextType|undefined>(undefined)

export default ChainContext