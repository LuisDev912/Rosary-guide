import { Link } from "react-router";

export function NavLink({ href, children, ...restOfProps }) {
    return (
        <Link to={href} {...restOfProps}>
            {children}
        </Link>
    );
}
