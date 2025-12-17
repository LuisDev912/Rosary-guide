import { useTranslation } from "react-i18next";
import { NavLink } from "../components/NavLink.jsx";

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <section>
            <h1 className="title">{t("home.title")}</h1>
            <h2 className="subtitle">{t("home.subtitle")}</h2>
            <p>{t("overview.intro")}</p>

            <div className="navigationLinks" style={{
                display: 'flex', 
                gap: '15px'
            }}>
                <NavLink to="/Rosary" className="start-link">
                    {t("home.startButton")}
                </NavLink>
                
                <NavLink to="/info" className="info-link">
                    {t("home.infoButton")}
                </NavLink>
            </div>
        </section>
    );
}