import { Outlet } from "react-router";
import { Header, Footer } from "../components/Semantic.jsx";
import { useTranslation } from "react-i18next";

function MainLayout() {
    const { t } = useTranslation();
    
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

            <main id="main-content" tabIndex='-1'>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;