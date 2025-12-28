import { useTranslation } from "react-i18next";
import { NavLink } from "../components/NavLink.jsx";
import { useSEO } from "../hooks/useSeo.jsx";

export default function HomePage() {
    const { t } = useTranslation();

    useSEO({
        titleKey: "seo.home.title",
        descriptionKey: "seo.home.description",
    });

    return (
        <section>
            <h1 className="heading-primary">{t("home.title")}</h1>
            <h2 className="heading-secondary">{t("home.subtitle")}</h2>
            <p>{t("overview.intro")}</p>

            <div className="navigationLinks" style={{
                display: 'flex', 
                justifyContent: 'space-evenly'
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