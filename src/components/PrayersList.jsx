/**
PrayerList Component
A component responsible for rendering all the main prayers of the Rosary.
It uses the <Prayer /> component for each prayer.

Responsibilities:
- Load all prayer titles and texts from i18n.
- Render each prayer in a structured and readable layout.
- Provide a clear and accessible list of prayers for the user.

Notes:
- Acts as a controller/container for all prayer components.
- Will later be styled using CSS Modules with a mobile-first approach.
*/

import { useTranslation } from "react-i18next";
import { useState, Activity } from "react";
import Prayer from "./Prayer";

function PrayerList() {
    const { t } = useTranslation();
    const [showAll, setShowAll] = useState(true);
    const prayers = t("prayers", { returnObjects: true });

    const handleToggle = () => setShowAll(!showAll); 

    return (
        <div>
            <div className="toggle-list">
                <button onClick={handleToggle}>{t("buttons.togglePrayers")}</button>
            </div>

            <Activity mode={showAll ? "visible" : "hidden"}>
                <div className="prayers">
                    <h2>{t("prayers.title")}</h2>

                    {Object.entries(prayers).map(([key, prayer]) => (
                        <Prayer
                            key={key}
                            title={prayer.title}
                            text={prayer.text}
                        />
                    ))}
                </div>
            </Activity>
        </div>
    );
}

export default PrayerList;