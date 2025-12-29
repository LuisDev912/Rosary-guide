import {HomeIcon} from '../assets/icons/HomeIcon.jsx';
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <section
            style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
            >
            <h1 className="heading-primary">{t("notFound.title")}</h1>

            <button
                
                onClick={() => navigate('/')}>
                {t("buttons.goBack")}
                <HomeIcon />
            </button>
        </section>
    );
};