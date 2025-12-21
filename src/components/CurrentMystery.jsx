import { useTranslation } from "react-i18next";
import { Activity } from "react";

/**
* CurrentMystery.jsx
*
* This component displays the currently active Rosary mystery.
* It is used inside the RosaryPage to show the mystery that the
* user is meditating on at the moment.
*
* Responsibilities:
* - Receive a single mystery through props.
* - Render its title.
* - Ensure that nothing breaks if the mystery is not yet available.
*
* Catholic context:
* - Each Rosary mystery invites the user to meditate on a moment of salvation history.
*   This component helps present that moment clearly and peacefully.
*/

function CurrentMystery({ selectedMystery, index, showFinishProgress }) {
    const { t } = useTranslation();

    return (
        <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
        >
            <p className="sr-only">
                {t("aria.currentMysteryProgress", {
                    currentMystery: index
                })}
            </p>

            <p>{selectedMystery}</p>

            <Activity mode={showFinishProgress ? "visible" : "hidden"}>
                <p className="sr-only">
                    {t("aria.finishProgress")}
                </p>
            </Activity>
        </div>
    );
}

export default CurrentMystery;