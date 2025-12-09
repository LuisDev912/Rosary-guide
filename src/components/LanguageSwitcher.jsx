import { useTranslation } from "react-i18next";
import Styles from './LanguageSwitcher.module.css';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div>
            <button
                onClick={() => changeLang("es")}
                className={Styles.langBtn}
            >ES</button>
            <button
                onClick={() => changeLang("en")}
                className={Styles.langBtn}
            >En</button>
        </div>
    );
}

export default LanguageSwitcher;