import { useTranslation } from "react-i18next";
import { NavLink } from "../components/NavLink.jsx";

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <main>
            <h1>{t("home.title")}</h1>
            <h2>{t("home.subtitle")}</h2>
            <p>{t("overview.intro")}</p>

            <NavLink to="/Rosary" className="start-button">
                {t("home.startButton")}
            </NavLink>
        </main>
    );
}