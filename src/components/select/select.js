import { Link } from "react-router-dom"
import "./select.css"

export const Select = ({ setSelectModal, selectModal }) => {
    return (
        <div className="big-select">
            <div className={`select d-inline-block ${!selectModal && "d-none"}`} >
                <Link to="/account">My account</Link>
                <Link to="/add-book">Add book</Link>
                <Link to="/add-author">Add author</Link>
                <button onClick={() => setSelectModal(false)}>bekor qilish</button>
            </div >
        </div>
    )
}