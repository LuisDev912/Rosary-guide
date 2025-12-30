import { useTranslation } from "react-i18next";
import { NavLink } from "../components/NavLink.jsx";
import { useSEO } from "../hooks/useSEO.jsx";

export default function HomePage() {
    const { t, i18n } = useTranslation();

    useSEO({
        title: "seo.home.title",
        description: "seo.home.description",
        og: {
            title: "seo.home.title",
            description: "seo.home.description",
            locale: i18n.language === "es" ? "es_AR" : "en_US",
        },
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