import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();
    
    return (
        <header>
            <h2>{t("home.headerTitle")}</h2>

            <LanguageSwitcher />
        </header>
    )
}
export default Header;