import { useTranslation } from "react-i18next";
import { useState } from "react";
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

    const handleSubmit = () => {
        if (prayer.trim().length !== 0) setSubmitted(true)
    }
    return (
        <main className="RosaryEnd-main">
            <h1>{t("end.title")}</h1>

            <section className="prayer-reminder">
                <details>
                    <p>{t("prayers.hailHolyQueen.text")}</p>
                    <summary>{t("end.finalPrayerReminder")}
                    </summary>
                </details>
            </section>

            <section className="custom-prayer">
                <h2>{t("end.prayerQuestion")}</h2>

                <textarea
                    id="custom-prayer-input"
                    rows="6"
                    placeholder={t("end.prayerInputPlaceholder")}
                    value={prayer}
                    onChange={(e) => setPrayer(e.target.value)}
                />

                <button
                    className="submit-prayer-btn"
                    onClick={handleSubmit}
                    disabled={prayer.trim().length === 0}
                >
                    submit
                </button>

                <p>{prayer}</p>

            </section>
        </main>
    );
}
export default RosaryEnd;