import { useTranslation } from "react-i18next";
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
    return <h1>{t("end.title")}</h1>
}
export default RosaryEnd;