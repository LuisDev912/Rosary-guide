import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Next } from "../iconsJSX/Next";
import { Previous } from "../iconsJSX/Previous";
import CurrentMystery from "./CurrentMystery";
import Styles from '../styles/page-styles/RosaryPrayer.module.css'

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
    const navigate = useNavigate();
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
        <>
            <div className="current-mystery" style={{textAlign: 'center'}}>
                <strong>{t("labels.currentMystery")}:</strong>
                <CurrentMystery
                    selectedMystery={currentMystery}
                    index={currentMysteryIndex + 1}
                    showFinishProgress={currentMysteryIndex === 4}
                /> 
                <span>{currentMysteryIndex + 1} / 5</span>
            </div>

            <div className={Styles.controlButtons}>
                <div className={Styles.navigateButtons}>
                    <button
                        className="previous-mystery"
                        onClick={() => goPrevious()}
                        disabled={currentMysteryIndex === 0}
                        aria-disabled={currentMysteryIndex === 0}
                    >
                    <Previous />
                        {t("buttons.previousMystery")}
                    </button>

                    <button
                        className="next-mystery"
                        onClick={() => goNext()}
                        disabled={currentMysteryIndex === 4}
                        aria-disabled={currentMysteryIndex === 4}
                    >
                        {t("buttons.nextMystery")}
                        <Next />
                    </button>
                </div>

                <div className="end-button">
                    <button
                        className="end-Rosary"
                        disabled={currentMysteryIndex !== 4}
                        aria-disabled={currentMysteryIndex !== 4}
                        onClick={() => navigate('/Rosary/end')}
                    >
                        {t("buttons.endRosary")}
                    </button>
                </div>
            </div>
        </>
    );
}

export default RosaryRunner;