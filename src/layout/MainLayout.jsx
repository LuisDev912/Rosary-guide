import { Outlet } from "react-router";
import { Header, Footer } from "../components/Semantic.jsx";

function MainLayout() {
    return (
        <>
            <Header />

            <main style={{ padding: "1rem" }}>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;
