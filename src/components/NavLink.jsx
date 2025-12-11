import { Link } from "react-router";
import Styles from './NavLink.module.css';

export function NavLink({ href, children, ...restOfProps }) {
    return (
        <Link to={href} {...restOfProps} className={Styles.anchor}>
            {children}
        </Link>
    );
}
