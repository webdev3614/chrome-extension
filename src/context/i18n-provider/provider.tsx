import { ReactNode, useEffect } from "react";
import { use as initI18n } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { en } from "@/locales/en";
import { useSettings } from "../settings-provider/hooks";
import { error } from "@/utils/print";

initI18n(initReactI18next).init({
    debug: false,
    ns: Object.keys(en),
    defaultNS: "common",
    fallbackNS: "common",
    fallbackLng: "en",
    resources: {
        en
    },
}).catch((err: unknown) => {
    error(`[I18nProvider] Failed to initialize i18n: ${err}`);
})

const I18nProvider = ({ children }: { children: ReactNode }) => {
    const { i18n } = useTranslation()
    const { settings } = useSettings()

    useEffect(() => {
        if (settings) {
            i18n.changeLanguage(settings.language).catch(() => {
                error(`[I18nProvider] Failed to change language to ${settings.language}`);
            });
        }
    }, [i18n, settings])
    return (
        <>
            {
                children
            }
        </>
    )
}

export default I18nProvider