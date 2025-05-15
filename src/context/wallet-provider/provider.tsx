import { ReactNode,JSX, useState, useEffect } from "react";
import WalletContext, { WalletInfo } from "./context";
import { fetchData } from "@/api/axios";
import { useTrade } from "../trade-provider/hooks";

const WalletProvider = ({children}:{children:ReactNode}):JSX.Element => {
    const [wallets,setWallets] = useState<WalletInfo[]>()
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>()
    const {tradeSettings} = useTrade()
    const loadWalletInfo = () => {
        if(tradeSettings){
            setLoading(true)
            const params = new URLSearchParams({
                chain_id:`${tradeSettings.chain_id}`
            })
            const paramStr = params.toString()
            fetchData(`/api/wallets?${paramStr}`).then((result)=>{
                if(result.err){
                    setError(result.err)
                }else{
                    setWallets(result.data.data)
                }
            }).catch((err)=>{
                setError(err)
            }).finally(()=>{
                setLoading(false)
            })
        }
    }
    useEffect(()=>{
        if((!wallets || (wallets&&wallets[0]?.chain_id !== tradeSettings?.chain_id)&&!error)){
           loadWalletInfo()
        }
    })
    return (
        <WalletContext.Provider value={{wallets,loading,error}}>
            {
                children
            }
        </WalletContext.Provider>
    )
}

export default WalletProvider