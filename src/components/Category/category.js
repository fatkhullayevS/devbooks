import { NavLink } from "react-router-dom"
import "./category.css"


export const Category = () => {
    return (
        <nav className="category__nav">
            <ul>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/temuriy">Temuriylar davri </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/jadid">Jadid adabiyoti </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/sovet">Sovet davri  </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/mustaqillik">Mustaqillik davri</NavLink>
                </li>
            </ul>
        </nav>
    )
}