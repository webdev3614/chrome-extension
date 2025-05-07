import { JSX } from "react";
import { useForm } from "react-hook-form";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UI } from "./signin-ui";
import { UIRender } from "../core/ui-render";
import { Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr/PaperPlaneTilt";
import { dev } from "@/config";
import { useAuth } from "@/context/auth-provider/hooks";

const defaultValues = {
    accessCode: "",
}

const schema = zod.object({
    accessCode: zod.string().length(8,"Access code must be 8 characters long"),
})

export const SigninForm = ():JSX.Element => {
    const {t} = useTranslation()
    const {control,handleSubmit,formState:{errors}} = useForm({
        defaultValues,
        resolver: zodResolver(schema)
    })
    const {signin} = useAuth()
    const onSubmit = (data:any) => {
        signin(data.accessCode)
    }
    const onCustomSubmit = () => {
        handleSubmit(onSubmit)()
    }
    const navigateTG = () => {
        window.open(`https://t.me/${dev.botName}?start=accesscode`, "_blank")
    }
    return (
        <Stack padding={2}>
            <Button variant="text"
                sx={{
                    marginBottom:"20px", 
                    color:"#fff",
                    bgcolor:"#444", 
                    borderRadius:"24px",
                    fontSize:"24px",
                    padding:"5px 20px"
                }} 
                startIcon={<PaperPlaneTilt/>} 
                fullWidth
                onClick={navigateTG}>
                {t("connect_account")}
            </Button>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    UI.map((item)=>{
                        return <UIRender 
                                    key={item.name} 
                                    item={item} 
                                    control={control} 
                                    errors={errors} 
                                    sx={{
                                        color:"#fff",
                                        borderRadius:"24px",
                                        backgroundColor: "#444",
                                        fontSize:"20px",
                                    }}
                                    onSubmit={onCustomSubmit}
                                    onChange={onCustomSubmit}
                                />
                    })
                }
            </form>
        </Stack>
    )
}