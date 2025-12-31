import {HomeIcon} from '../iconsJSX/HomeIcon.jsx';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router';

export default function NotFoundPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section
            style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
            >
            <h1 
                className="heading-primary"
            >
                {t("notFound.title")}
            </h1>

            <button
                onClick={() => navigate('/')}>
                {t("buttons.goBack")}
                <HomeIcon />
            </button>
        </section>
    );
};