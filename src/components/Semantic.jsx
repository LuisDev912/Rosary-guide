import { useTranslation } from "react-i18next";
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { NavLink } from './NavLink.jsx';
import SemanticStyles from '../styles/Semantic.module.css'

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <p className={SemanticStyles.versicle}>{t("labels.finalVersicle")}</p>

            <div className={SemanticStyles.footerInfo}>
                © {new Date().getFullYear()} {t("labels.footerMessage")} — Luis Calleja <br />
                <small className={SemanticStyles.version}>v1.2.0</small>
            </div>
        </footer>
    );
}

export function Header() {
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
            <h2 className={SemanticStyles.text}>{t("home.headerTitle")}</h2>

            <nav className={SemanticStyles.navBar}>
                <ul>

                    {pages.map((pageLabel, index) => (
                        <li key={index}>
                            <NavLink
                                to={links[index]}
                                end={links[index] === '/Rosary'}
                                className={SemanticStyles.navLink}
                            >
                                {pageLabel}
                            </NavLink>
                        </li>
                    ))}
                    
                </ul>
            </nav>

            <LanguageSwitcher />
        </header>
    );
};