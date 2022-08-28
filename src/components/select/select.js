import { Link } from "react-router-dom"
import "./select.css"
import { Lang } from "../../Pages/Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../context/LangContext"

export const Select = ({ setSelectModal, selectModal }) => {
    const { lang: til, } = useContext(LangContext)
    return (
        <div className="big-select">
            <div className={`select d-inline-block ${!selectModal && "d-none"}`} >
                <Link to="/account">{Lang[til].homePage.myaccount}</Link>
                <Link to="/add-book">{Lang[til].homePage.addbook}</Link>
                <Link to="/add-author">{Lang[til].homePage.addauthor}</Link>
                <button onClick={() => setSelectModal(false)}>bekor qilish</button>
            </div >
        </div>
    )
}