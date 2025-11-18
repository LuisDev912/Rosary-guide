/**
Mysteries Component
This component renders all four groups of Rosary mysteries:
Joyful, Sorrowful, Glorious, and Luminous. Each group is displayed using the reusable <MysteryGroup /> component.

Responsibilities:
- Load all mystery titles and lists from i18n.
- Pass the correct translated content to each MysteryGroup instance.
- Display the main section title for the Mysteries view.

Notes:
- This acts as a container/grouping component.
- The structure is built for clarity, scalability, and accessibility.
*/

import { useTranslation } from "react-i18next";
import MysteryGroup from "./MysteryGroup";

function Mysteries() {
    const { t } = useTranslation();

    return (
        <section>
            {/* Título general */}
            <h1>{t("rosary.mysteries.title")}</h1>

            {/* Joyful */}
            <MysteryGroup
                title={t("rosary.mysteries.joyful.title")}
                items={t("rosary.mysteries.joyful.list", { returnObjects: true })}
            />

            {/* Sorrowful */}
            <MysteryGroup
                title={t("rosary.mysteries.sorrowful.title")}
                items={t("rosary.mysteries.sorrowful.list", { returnObjects: true })}
            />

            {/* Glorious */}
            <MysteryGroup
                title={t("rosary.mysteries.glorious.title")}
                items={t("rosary.mysteries.glorious.list", { returnObjects: true })}
            />

            {/* Luminous */}
            <MysteryGroup
                title={t("rosary.mysteries.luminous.title")}
                items={t("rosary.mysteries.luminous.list", { returnObjects: true })}
            />
        </section>
    );
}

export default Mysteries;