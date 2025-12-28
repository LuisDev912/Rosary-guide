import { useTranslation } from "react-i18next";
import { Activity, useState, useRef, use, useEffect } from "react";
import Styles from '../styles/page-styles/EndPage.module.css'
import { useSEO } from "../hooks/useSeo";

/**
* ./src/pages/RosaryEnd.jsx
* This is a page where the user goes when he or she
* completes the Rosary. Here, the user can write a
* personalized prayer or intentions.
* This page also shows the last step of the Rosary
* (the Hail Holy Queen).
*
* The user will be redirected here using React Router.
*/

function RosaryEnd() {
    const { t } = useTranslation();
    const [prayer, setPrayer] = useState("");
    const [isSubmitted, setSubmitted] = useState(false);
    const userPrayerRef = useRef(null);
    const isValidPrayer = prayer.trim().length > 0;

    useEffect(() => {
        if (isSubmitted && userPrayerRef.current) userPrayerRef.current.focus();
    }, [isSubmitted])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidPrayer) return;
        setSubmitted(true)
    }

    useSEO({
        titleKey: "seo.endPage.title",
        descriptionKey: "seo.endPage.description",
    });

    return (
        <>
            <h1 className="heading-primary">{t("end.title")}</h1>

            <section className="prayer-reminder">
                <details className={Styles.reminder}>
                    <summary>{t("end.finalPrayerReminder")}</summary>
                    <p className="italic prose">{t("prayers.hailHolyQueen.text")}</p>
                </details>
            </section>

            <section className={Styles.customPrayer}>
                <h2 className="heading-secondary text-ui">{t("end.prayerQuestion")}</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="custom-prayer" className="sr-only">
                        {t("end.prayerLabel")} {/* I'll add this translation later */}
                    </label>
                    <input
                        id="custom-prayer"
                        className={Styles.customPrayerInput}
                        placeholder={t("end.prayerInputPlaceholder")}
                        value={prayer}
                        onChange={(e) => setPrayer(e.target.value)}
                    />

                    <button
                        className="submit-prayer-btn"
                        type="submit"
                        disabled={!isValidPrayer}
                        aria-disabled={!isValidPrayer}
                    >
                        {t("end.submitPrayer")}
                    </button>
                </form>

                <Activity mode={isSubmitted ? 'visible' : 'hidden'}>
                    <div
                        tabIndex='-1'
                        ref={userPrayerRef}
                        className="submitted-prayer"
                        aria-live="polite"
                    >
                        <h3>{t("end.yourPrayer")}</h3>
                        <p className="italic">{prayer}</p>
                    </div>
                </Activity>
            </section>
        </>
    );
}
export default RosaryEnd;