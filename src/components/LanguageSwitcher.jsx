import { useTranslation } from "react-i18next";
import ButtonStyles from '../styles/Button.module.css';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div>
            <button
                onClick={() => changeLang("es")}
                className={ButtonStyles.btn}
            >ES</button>
            <button
                onClick={() => changeLang("en")}
                className={ButtonStyles.btn}
            >En</button>
        </div>
    );
}

export default LanguageSwitcher;