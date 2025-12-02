import { useTranslation } from "react-i18next";
import { NavLink } from "../components/NavLink.jsx";

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <main>
            <h1>{t("home.title")}</h1>
            <h2>{t("home.subtitle")}</h2>
            <p>{t("overview.intro")}</p>

            <NavLink to="/Rosary" className="start-link">
                {t("home.startButton")}
            </NavLink>

            <span style={{ margin: '10px' }}></span> {/* this is temporal*/}
            
            <NavLink to="/info" className="info-link">
                {t("home.infoButton")}
            </NavLink>
        </main>
    );
}