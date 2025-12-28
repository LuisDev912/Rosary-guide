import { useTranslation } from "react-i18next";
import { NavLink } from "../components/NavLink.jsx";
import { useEffect } from "react";

export default function HomePage() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = t("seo.home.title")

        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute(
            "content",
            `${t("seo.home.description")}`
            );
        }
    }, [i18n.language]);

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