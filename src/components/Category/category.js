import { NavLink } from "react-router-dom"
import "./category.css"
import { Lang } from "../../Pages/Lang/Lang"
import { LangContext } from "../../context/LangContext"
import { useContext } from "react"


export const Category = () => {

    const { lang: til, } = useContext(LangContext)
    return (
        <nav className="category__nav">
            <ul>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/temuriy">{Lang[til].homePage.categoryTemuriy} </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/jadid">{Lang[til].homePage.categoryJadid}</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/sovet">{Lang[til].homePage.categorySovet}</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block"
                            : "text-decoration-none"
                    } to="/mustaqillik">{Lang[til].homePage.categoryMustaqillik}</NavLink>
                </li>
            </ul>
        </nav>
    )
}