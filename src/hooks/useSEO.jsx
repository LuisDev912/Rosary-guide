import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useSEO({ titleKey, descriptionKey}){
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if(titleKey) document.title = t(titleKey);

        if(descriptionKey){
            let meta = document.querySelector('meta[name="description"]');

            if(!meta){
                let meta = document.createElement("meta");
                meta.setAttribute('name', 'description');
                document.head.appendChild(meta);
            }

            meta.setAttribute("content", t(descriptionKey))
        }
    }, [i18n.language, titleKey, descriptionKey]);
}