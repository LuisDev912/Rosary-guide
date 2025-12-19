import { NavLink as RouterNavLink } from "react-router";
import LinkStyles from '../styles/NavLink.module.css';

export function NavLink({ href, children, ...restOfProps }) {
    return (
        <RouterNavLink
            to={href}
            {...restOfProps}
            className={({ isActive }) =>
                isActive
                    ? `${LinkStyles.anchor} ${LinkStyles.active}`
                    : LinkStyles.anchor
            }>
            {children}
        </RouterNavLink>
    );
}
