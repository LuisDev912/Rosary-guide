import { Link } from "react-router";
import LinkStyles from '../styles/NavLink.module.css';

export function NavLink({ href, children, ...restOfProps }) {
    return (
        <Link to={href} {...restOfProps} className={LinkStyles.anchor}>
            {children}
        </Link>
    );
}
