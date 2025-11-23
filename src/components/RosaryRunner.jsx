import { useMemo, useState } from "react";
import CurrentMystery from "./CurrentMystery";
import { useTranslation } from "react-i18next";

/**
* RosaryRunner.jsx
*
* This
is the component responsible for managing the progress
* of the Rosary prayer sequence. It receives the selected set of mysteries
* and the list of fixed steps, and provides controls to move forward or backward.
* This component does not decide which mystery set is used; it only handles
* the user's current position within the sequence and triggers callbacks
*/

function RosaryRunner({ mysteries }) {
    const { t } = useTranslation();
    const [currentMysteryIndex, setCurrentMysteryIndex] = useState(0);

    const currentMystery = useMemo(() => {
        return mysteries?.[currentMysteryIndex] ?? null;
    }, [mysteries, currentMysteryIndex]);

    const goPrevious = () => {
        setCurrentMysteryIndex((prev) => 
            prev > 0 ? prev - 1 : prev);
    }

    const goNext = () => {
        setCurrentMysteryIndex((prev) => 
            prev < mysteries.length - 1 ? prev + 1 : prev);
    }

    return (
        <section className="Rosary-runner">
            <div className="current-mystery">
                <strong>{t("labels.currentMystery")}:</strong>
                <CurrentMystery selectedMystery={currentMystery} />
            </div>

            <div className="control-buttons">
                <button className="previous-mystery"
                    onClick={() => goPrevious()}
                    disabled={currentMysteryIndex === 0}
                >
                    {t("buttons.previousMystery")}
                </button>

                <button className="next-mystery"
                    onClick={() => goNext()}
                    disabled={currentMysteryIndex === 4}>
                    {t("buttons.nextMystery")}
                </button>
            </div>
        </section>
    );

}

export default RosaryRunner;