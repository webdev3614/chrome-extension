import { useNavigate } from "react-router-dom"

export const useCustomNavigate = ():(url:string)=>void => {
    const navigate = useNavigate()
    const handleNavigate = (url:string) => {
        const urls = localStorage.getItem("urls")
        const updatedUrls = urls ? JSON.parse(urls) : []
        const lastUrl = updatedUrls.pop();
        if(lastUrl !== url){
            localStorage.setItem("urls", JSON.stringify([...updatedUrls, url]))
        }
        navigate(url)
    }
    return handleNavigate
}