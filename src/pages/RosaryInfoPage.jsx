import { useTranslation } from "react-i18next"

export default function RosaryInfoPage() {
    const { t } = useTranslation();
    return (
        <main>
            <section className="intro-section">
                <h1>{t("info.title")}</h1>
                <h2>{t("info.intro")}</h2>
            </section>
        </main>
    );
}