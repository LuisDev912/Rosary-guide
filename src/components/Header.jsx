import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useTranslation } from 'react-i18next';
import { NavLink } from './NavLink.jsx';

function Header() {
    const { t } = useTranslation();
    const pages = t("notFound.pages", { returnObjects: true });
    const links = [
        "/",
        "/Rosary",
        "/Rosary/end",
        "/info"
    ];
    
    return (
        <header>
            <h2>{t("home.headerTitle")}</h2>

            <nav>
                {pages.map((pageLabel, index) => (
                    <NavLink key={index} to={links[index]}>
                        {pageLabel} | 
                    </NavLink>
                ))}
            </nav>

            <LanguageSwitcher />
        </header>
    )
}
export default Header;