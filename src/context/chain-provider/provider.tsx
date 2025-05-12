import { ReactNode,JSX, useState, useEffect } from "react";
import ChainContext, { ChainInfo } from "./context";
import { fetchData } from "@/api/axios";

const ChainProvider = ({children}:{children:ReactNode}):JSX.Element => {
    const [chains,setChains] = useState<ChainInfo[]>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const loadChainInfo = () => {
        setLoading(true)
        fetchData("/api/chains").then((result)=>{
            if(result.err){
                setError(result.err)
            }else{
                setChains(result.data.data)
            }
        }).catch((err)=>{
            setError(err)
        }).finally(()=>{
            setLoading(false)
        })
    }
    useEffect(()=>{
        if(!chains){
            loadChainInfo()
        }
    })
    return (
        <ChainContext.Provider value={{chains,loading,error}}>
            {
                children
            }
        </ChainContext.Provider>
    )
}

export default ChainProvider