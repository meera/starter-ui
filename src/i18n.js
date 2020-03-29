import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = { 
    en: {
        translation: { 
            "AppName": "Starter App",
            "Hello": "Hello !",
            "Loading": "Loading.."
        }
    },
    mr: {
        translation: { 
            "AppName": "पहिला अँप",
            "Hello": "नमस्कार !",
            "Loading": "लोड करीत आहे.."
        }
    }
}
i18n
    .use(initReactI18next)
    .init( {
        resources,
        lng: "mr",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

    export default i18n;
