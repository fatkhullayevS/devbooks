import { NavLink } from "react-router-dom"
import "./book-category.css"


export const BookCategory = () => {
    return (
        <nav className="category__nav">
            <ul>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/books/temuriy">Temuriylar davri </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/books/jadid">Jadid adabiyoti </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/books/sovet">Sovet davri  </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/books/mustaqillik">Mustaqillik davri</NavLink>
                </li>
            </ul>
        </nav>
    )
}