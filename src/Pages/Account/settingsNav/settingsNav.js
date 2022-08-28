import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { LangContext } from "../../../context/LangContext"
import { ThemeContext } from "../../../context/ThemeContext"
import { Lang } from "../../Lang/Lang"
import "./settings-nav.css"

export const SettingsNav = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    const { lang: til } = useContext(LangContext)

    return (
        <div className="container">
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive
                                ? "active-settings d-inline-block"
                                : "text-decoration-none"
                        } to="/account">{Lang[til].settingsNav.myaccount}</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive
                                ? "active-settings d-inline-block"
                                : "text-decoration-none"
                        } to="/security">{Lang[til].settingsNav.security}</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive
                                ? "active-settings d-inline-block"
                                : "text-decoration-none"
                        } to="/settings">{Lang[til].settingsNav.settings}</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}