import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = { 
    en: {
        translation: { 
            "AppName": "Starter App",
            "Hello": "Hello !",
            "Loading": "Loading..",
            "GoRegister": `New To Starter App? Join now!`,
            "GoLogin": "Already a member? Goto Login!"

        }
    },
    mr: {
        translation: { 
            "AppName": "पहिला अँप",
            "Hello": "नमस्कार !",
            "Loading": "लोड करीत आहे..",
            "Users": "वापरकर्ता",
            "GoRegister": "New To पहिला अँप? Join now!",
            "GoLogin": "Already a member? Goto Login!"
        }
    }
}
i18n
    .use(initReactI18next)
    .init( {
        resources,
        lng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

    export default i18n;
