/**
This component renders the list of steps required to pray the Holy Rosary.
It loads the translated content from the rosary.json file using i18n.

Responsibilities:
- Display the main title for the steps section.
- Render each step in an ordered list.

Notes:
- Designed to be mobile-first for readability.
- No styling is applied yet.
*/

import { useTranslation } from "react-i18next";

function Steps() {
    const { t } = useTranslation();
    const steps = t("steps.list", { returnObjects: true });

    
    return (
        <ol>
            {steps.map((step, index) => (
                <li key={index}>{step}</li>
            ))}
        </ol>
    );
};

export default Steps;