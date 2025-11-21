import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// Import the JSON files 
import en from "./locales/en/en.json";
import es from "./locales/es/es.json";
import enRosary from "./locales/en/rosary.json";
import esRosary from "./locales/es/rosary.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    ...en,
                    ...enRosary
            } },
            es: {
                translation: {
                    ...es,
                    ...esRosary
            } },
        },

        // Starts with Spanish
        lng: "es",

        // Supports these languages
        supportedLngs: ["en", "es"],

        // If it fails, the language is set to English
        fallbackLng: "en",

        // Avoids problems with React
        interpolation: {
            escapeValue: false,
        },

        // Prevents console errors
        react: {
            useSuspense: false,
        },
    });

export default i18n;