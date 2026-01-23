import { Outlet, useLocation } from "react-router";
import { Header, Footer } from "../components/Semantic.jsx";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";

function MainLayout() {
    const { t, i18n } = useTranslation();
    const mainRef = useRef(null);
    const location = useLocation();
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const icon = document.querySelector(`link[rel='icon']`)
    
    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language])

    useEffect(() => {
        if (mainRef.current) mainRef.current.focus();
    }, [location.pathname])

    useEffect(() => {
        isDarkMode ? icon.setAttribute('href', '../../public/Rosary-two.svg') : icon.setAttribute('href', '../../public/Rosary-dark-mode.svg')
    }, [])

    
    return (
        <>
            <Header />

            <button
                className="skip-link"
                onClick={() => {
                    document.getElementById('main-content')?.focus()
                }}
            >
                {t("a11y.skipToContent")}
            </button>

            <main
                id="main-content"
                tabIndex='-1'
                ref={mainRef}
            >
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;