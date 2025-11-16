import { useTranslation } from "react-i18next";

function Steps() {
    const { t } = useTranslation();
    const steps = t("rosary.steps.list", { returnObjects: true });

    
    return (
        <ol>
            {steps.map((step, index) => (
                <li key={index}>{step}</li>
            ))}
        </ol>
    );
};

export default Steps;