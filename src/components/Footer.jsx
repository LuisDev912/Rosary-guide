import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <p>{t("labels.finalVersicle")}</p>

            <div>
                © {new Date().getFullYear()} {t("labels.footerMessage")} — Luis Calleja
            </div>
        </footer>
    );
}
export default Footer;