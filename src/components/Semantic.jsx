import { useTranslation } from "react-i18next";
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { NavLink } from './NavLink.jsx';

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <p>{t("labels.finalVersicle")}</p>

            <div>
                © {new Date().getFullYear()} {t("labels.footerMessage")} — Luis Calleja <br />
                <small id="version">v1.0.0</small>
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