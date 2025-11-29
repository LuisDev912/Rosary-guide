import { NavLink } from "../components/NavLink";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <main>
            <h2>
                Oops, it seems like the page you were looking for doesn't exist. 
            </h2>
            <h3>
                Here are some alternatives:
            </h3>

            <ul>
                <li>
                    <NavLink to="/">
                        Main page
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Rosary">
                        Rosary page
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Rosary/end">
                        Final Prayer
                    </NavLink>
                </li>
            </ul>
        </main>
    )
}