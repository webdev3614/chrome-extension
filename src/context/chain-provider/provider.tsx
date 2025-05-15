import { ReactNode,JSX, useState, useEffect } from "react";
import ChainContext, { ChainInfo } from "./context";
import { fetchData } from "@/api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth-provider/hooks";

const ChainProvider = ({children}:{children:ReactNode}):JSX.Element => {
    const navigate = useNavigate()
    const {initAuth} = useAuth()
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
        if(!chains&&!error){
            loadChainInfo()
        }
    })
    useEffect(()=>{
        if(error === "Request failed with status code 401"){
            initAuth()
            navigate("/")
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