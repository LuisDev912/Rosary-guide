import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router";
import {HomeIcon} from '../assets/icons/HomeIcon.jsx'
import { useSEO } from "../hooks/useSEO.jsx";
import Styles from '../styles/page-styles/InfoPage.module.css'

export default function RosaryInfoPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const days = t("info.days.list", {returnObjects: true})

    useSEO({
        titleKey: "seo.infoPage.title",
        descriptionKey: "seo.infoPage.description",
    });

    return (
        <>
            <section className="intro-section">
                <h1 className="heading-primary">{t("info.title")}</h1>
                <p>{t("info.intro")}</p>
            </section>

            <section className={Styles.explanationSection}>
                <div className="structure-intro">
                    <h2 className="heading-secondary">{t("info.structure.title")}</h2>
                    <p>{t("info.structure.text")}</p>
                </div>

                <p>{t("info.mysteriesExplanation")}</p>
                <p className="heading-tertiary">{t("info.days.title")}</p>
                <ol>
                    {days.map((day, index) => (
                        <li key={index}>{day}</li>
                    ))}
                </ol>
            </section>

            <section className={Styles.navigationSection}>
                <button
                    onClick={() => navigate('/Rosary')}>
                    {t("buttons.startRosary")}
                </button>

                <button
                    onClick={() => navigate('/')}>
                    {t("buttons.goBack")}
                    <HomeIcon />
                </button>
            </section>
        </>
    );
}