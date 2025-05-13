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
        <Stack padding={1} spacing={1} justifyContent="center" alignItems="center">
            <Button variant="text"
                sx={{ 
                    color:"#f4f2f3",
                    bgcolor:"#363636", 
                    borderRadius:"15px",
                    fontSize:"12px",
                    padding:"5px 20px",
                    width:"210px",
                    height:"38px"
                }} 
                startIcon={<PaperPlaneTilt size="30px"/>} 
                onClick={navigateTG}>
                {t("connect_account")}
            </Button>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack justifyContent="center" alignItems="center">
                        {
                            UI.map((item)=>{
                                return <UIRender 
                                            key={item.name} 
                                            item={item} 
                                            control={control} 
                                            errors={errors} 
                                            sx={{
                                                color:"#f4f2f3",
                                                fontSize:"12px",
                                                borderRadius:"15px",
                                                width:"167px",
                                                height:"32px",
                                                bgcolor: "#363636",
                                                overflow:"hidden"
                                            }}
                                            onSubmit={onCustomSubmit}
                                            onChange={onCustomSubmit}
                                        />
                            })
                        }
                    </Stack>
                </form>
        </Stack>
    )
}