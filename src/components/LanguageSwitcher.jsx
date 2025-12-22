import { useTranslation } from "react-i18next";
import { useState } from "react";

function LanguageSwitcher() {
    const { i18n, t } = useTranslation();
    const [announcement, setAnnouncement] = useState("");
    const currentLang = i18n.language;

    const changeLang = (lang) => {
        if (lang === currentLang) return;

        i18n.changeLanguage(lang);

        setAnnouncement(
            t("aria.languages.nextLanguage", {
                language: lang === 'es' ? "Spanish" : "English"
            })
        )
    }

    return (
        <>
            <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="sr-only"
            >
                {announcement}
            </div>

            <div>
                <button
                    onClick={() => changeLang("es")}
                    aria-label={t("aria.languages.nextLanguage", {
                        language: "Spanish"
                    })}
                    disabled={i18n.language === "es"}
                    aria-disabled={i18n.language === "es"}
                >
                    ES
                </button>

                <button
                    onClick={() => changeLang("en")}
                    aria-label={t("aria.languages.nextLanguage", {
                        language: "English"
                    })}
                    disabled={i18n.language === "en"}
                    aria-disabled={i18n.language === "en"}
                    style={{ marginTop: "5px" }}
                >
                    EN
                </button>
            </div>
        </>
    );
}

export default LanguageSwitcher;