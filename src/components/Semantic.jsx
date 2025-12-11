import { useTranslation } from "react-i18next";
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { NavLink } from './NavLink.jsx';
import Styles from './Semantic.module.css'

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <p className={Styles.versicle}>{t("labels.finalVersicle")}</p>

            <div className={Styles.footerInfo}>
                © {new Date().getFullYear()} {t("labels.footerMessage")} — Luis Calleja <br />
                <small className={Styles.version}>v1.0.1</small>
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
            <h2 className={Styles.text}>{t("home.headerTitle")}</h2>

            <nav className={Styles.navBar}>
                <ul>
                    {pages.map((pageLabel, index) => (
                        <li key={index}>
                            <NavLink to={links[index]}
                                className={Styles.navLink}>
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