import { ReactNode,JSX, useState, useEffect } from "react";
import WalletContext, { WalletInfo } from "./context";
import { fetchData } from "@/api/axios";

const WalletProvider = ({children}:{children:ReactNode}):JSX.Element => {
    const [wallets,setWallets] = useState<WalletInfo[]>()
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>()
    const loadWalletInfo = () => {
        setLoading(true)
        fetchData("/api/wallets").then((result)=>{
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
    useEffect(()=>{
        if(!wallets){
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