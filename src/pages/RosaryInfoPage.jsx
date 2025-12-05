import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router";

export default function RosaryInfoPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const days = t("info.days.list", {returnObjects: true})

    return (
        <main>
            <section className="intro-section">
                <h1>{t("info.title")}</h1>
                <h2>{t("info.intro")}</h2>
            </section>

            <section className="explanation-section">
                <div className="structure-intro">
                    <h3>{t("info.structure.title")}</h3>
                    <p>{t("info.structure.text")}</p>
                </div>

                <h2>{t("info.mysteriesExplanation")}</h2>
                <p>{t("info.days.title")}</p>
                <ol>
                    {days.map((day, index) => (
                        <li key={index}>{day}</li>
                    ))}
                </ol>
            </section>

            <section className="navigation-section">
                <button
                    onClick={() => navigate('/Rosary')}>
                    {t("buttons.startRosary")}
                </button>

                <button
                    onClick={() => navigate('/')}>
                    {t("buttons.goBack")}
                </button>
            </section>
        </main>
    );
}