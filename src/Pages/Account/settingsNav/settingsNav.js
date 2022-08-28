import { NavLink } from "react-router-dom"
import "./settings-nav.css"

export const SettingsNav = () => {
    return (
        <div className="container">
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive
                                ? "active-settings d-inline-block"
                                : "text-decoration-none"
                        } to="/account">My Account</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive
                                ? "active-settings d-inline-block"
                                : "text-decoration-none"
                        } to="/security">Security</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive
                                ? "active-settings d-inline-block"
                                : "text-decoration-none"
                        } to="/settings">Make Payment</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}