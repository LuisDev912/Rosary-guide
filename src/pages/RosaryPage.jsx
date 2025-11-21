import Mysteries from "../components/Mysteries";
import PrayerList from "../components/PrayersList";
import Steps from "../components/Steps";
import MysteryGroup from "../components/MysteryGroup";
import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";

/**
* RosaryPage.jsx
* 
* This page acts as the main container for the interactive Rosary guide.
* It brings together all core components (Steps, PrayersList, MysteryGroup)
* and prepares the logic needed to pray the Rosary in a structured, guided way.
* 
* Responsibilities:
* - Determine the correct mystery group for the current day of the week.
* - Retrieve all mystery, prayer, and step data from i18n.
* - Track the user's current mystery using component state.
* - Render the prayer steps, mysteries of the day, and main prayers.
* - Provide controls to advance through the mysteries.
* 
* Notes:
* - This page will evolve into the "main screen" of the application.
* - Styling and routing can be added later as the project grows.
* - The logic here ensures that App.jsx can stay clean and minimal.
*/


function RosaryPage() {
    const { t } = useTranslation();

    const MysteryDayByDay = {
        0: "glorious",
        1: "joyful",
        2: "sorrowful",
        3: "glorious",
        4: "luminous",
        5: "sorrowful",
        6: "joyful"
    };

    const today = new Date().getDay(); // choses the current day of the week 0-6
    const todayMysteryGroup = MysteryDayByDay[today];
    const allMysteryGroups = t("mysteries.groups", { returnObjects: true });
    const todayMysteries = allMysteryGroups[todayMysteryGroup];

    const [currentMysteryIndex, setCurrentMysteryIndex] = useState(0);

    const currentMystery = useMemo(() => {
        return todayMysteries?.Mysteries?.[currentMysteryIndex] || null;
    }, [todayMysteries, currentMysteryIndex]);
    return (
        <>
            <div className="Rosary-page">
                <h1>{t("home.title")}</h1>

                {/* show the Mysteries of the current day */}
                <section className="Mysteries-of-the-day">
                    <h2>{t("mysteries.title")}</h2>
                    <Mysteries />
                </section>

                {/* show the Steps component to guide through the Rosary */}
                <section className="Rosary-steps">
                    <h2>{t("steps.title")}</h2>
                    <Steps/>
                </section>
            </div>
        </>
    );
}

export default RosaryPage;