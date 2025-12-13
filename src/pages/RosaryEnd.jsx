import { useTranslation } from "react-i18next";
import { Activity, useState } from "react";
import Styles from '../styles/page-styles/EndPage.module.css'

/*
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
    const isValidPrayer = prayer.trim().length > 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidPrayer) return;
        setSubmitted(true)
    }
    return (
        <main className="RosaryEnd-main">
            <h1>{t("end.title")}</h1>

            <section className="prayer-reminder">
                <details className={Styles.reminder}>
                    <p>{t("prayers.hailHolyQueen.text")}</p>
                    <summary>{t("end.finalPrayerReminder")}
                    </summary>
                </details>
            </section>

            <section className={Styles.customPrayer}>
                <h2>{t("end.prayerQuestion")}</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id={Styles.customPrayerInput}
                        placeholder={t("end.prayerInputPlaceholder")}
                        value={prayer}
                        onChange={(e) => setPrayer(e.target.value)}
                    />

                    <button
                        className="submit-prayer-btn"
                        type="submit"
                        disabled={!isValidPrayer}
                    >
                        {t("end.submitPrayer")}
                    </button>
                </form>

                <Activity mode={isSubmitted ? 'visible' : 'hidden'}>
                    <div className="submitted-prayer">
                        <h3>{t("end.yourPrayer")}</h3>
                        <p>{prayer}</p>
                    </div>
                </Activity>

            </section>
        </main>
    );
}
export default RosaryEnd;