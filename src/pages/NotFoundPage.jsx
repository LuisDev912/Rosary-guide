import { NavLink } from "../components/NavLink";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
    const { t } = useTranslation();

    const pages = t("notFound.pages", { returnObjects: true });
    const links = [
        "/",
        "/Rosary",
        "/Rosary/end",
        "/info"
    ];

    return (
        <main>
            <h2>{t("notFound.title")}</h2>
            <h3>{t("notFound.alternatives")}</h3>

            <ul>
                {pages.map((pageLabel, index) => (
                    <li key={index}>
                        <NavLink to={links[index]}>
                            {pageLabel}
                        </NavLink>
                    </li>
                ))}
                {/* TODO: refactor duplicated code in NotFoundPage page and Header component */}
            </ul>
        </main>
    )
}