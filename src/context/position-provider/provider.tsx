import { ReactNode, JSX, useState } from "react";
import PositionContext, { Position } from "./context";
import { fetchData } from "@/api/axios";

const PositionProvider = ({children}: {children:ReactNode}): JSX.Element => {
    const [positions,setPositions] = useState<Position[]>()
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>()
    const loadPositions = (chainId:number) => {
        setLoading(true)
        fetchData(`/api/positions/${chainId}`).then((result)=>{
            if(result.err){
                setError(result.err)
            }else{
                setPositions(result.data.data)
            }
        }).catch((err)=>{
            setError(err)
        }).finally(()=>{
            setLoading(false)
        })
    }
    return (
        <PositionContext.Provider value={{positions,loading,error,loadPositions}}>
            {
                children
            }
        </PositionContext.Provider>
    )
}

export default PositionProvider