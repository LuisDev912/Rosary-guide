import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div>
            <button
                onClick={() => changeLang("es")}
            >ES</button>

            <button
                style={{
                    marginTop: '5px'
                }}
                onClick={() => changeLang("en")}
            >En</button>
        </div>
    );
}

export default LanguageSwitcher;