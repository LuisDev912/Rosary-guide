import {HomeIcon} from '../iconsJSX/HomeIcon.jsx';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router';
import { useSEO } from '../hooks/useSEO.jsx';

export default function NotFoundPage() {
    const { t , i18n} = useTranslation();
    const navigate = useNavigate();

    useSEO({
        title: "seo.notFoundPage.title",
        description: "seo.notFoundPage.description",
        og: {
            title: "seo.notFoundPage.title",
            description: "seo.notFoundPage.description",
            locale: i18n.language === "es" ? "es_AR" : "en_US",
        },
        index: true,
    });

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