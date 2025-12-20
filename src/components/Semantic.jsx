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

    const navItems = [
        { label: pages[0], to: "/", aria: "aria.home" },
        { label: pages[1], to: "/Rosary", aria: "aria.rosary", end: true },
        { label: pages[2], to: "/Rosary/end", aria: "aria.end" },
        { label: pages[3], to: "/info", aria: "aria.info" }
    ];


    return (
        <header>
            <h2 className={SemanticStyles.text}>{t("home.headerTitle")}</h2>

            <nav className={SemanticStyles.navBar}>
                <ul>

                    {navItems.map(({ label, to, aria, end }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                end={end}
                                aria-label={t(aria)}
                                className={SemanticStyles.navLink}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}

                    
                </ul>
            </nav>

            <LanguageSwitcher />
        </header>
    );
};