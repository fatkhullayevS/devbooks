import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { LangContext } from "../../../context/LangContext"
import { Lang } from "../../Lang/Lang"
import "./book-category.css"


export const BookCategory = () => {
    const { lang: til } = useContext(LangContext)
    return (

        <nav className="category__nav">
            <ul>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/books/temuriy">{Lang[til].homePage.categoryTemuriy}</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/books/jadid">{Lang[til].homePage.categoryJadid}</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/books/sovet">{Lang[til].homePage.categorySovet}</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/books/mustaqillik">{Lang[til].homePage.categoryMustaqillik}</NavLink>
                </li>
            </ul>
        </nav>
    )
}