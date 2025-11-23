import Steps from "../components/Steps";
import MysteryGroup from "../components/MysteryGroup";
import RosaryRunner from "../components/RosaryRunner";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

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
    const allMysteryGroups = t("mysteries", { returnObjects: true });

    const realGroups = useMemo(() => {
        const { title, ...groups } = allMysteryGroups;
        return groups;
    }, [allMysteryGroups]); // exclude the title property because I won't need it here

    const todayMysteries = realGroups[todayMysteryGroup];

    return (
        <>
            <div className="Rosary-page">
                <h1>{t("home.title")}</h1>

                {/* show the Steps component to guide through the Rosary */}
                <section className="Rosary-steps">
                    <h2>{t("steps.title")}</h2>
                    <Steps/>
                </section>

                {/* show the Mysteries of the current day */}
                <section className="Mysteries-of-the-day">
                    <h2>{t("mysteries.title")}</h2>
                    <MysteryGroup
                        title={t(`mysteries.${todayMysteryGroup}.title`)}
                        items={todayMysteries.list}
                    />
                </section>

                {/* control buttons  */}
                <section className="Mystery-controls">
                    <RosaryRunner mysteries={todayMysteries.list} />
                </section>
            </div>
        </>
    );
}

export default RosaryPage;