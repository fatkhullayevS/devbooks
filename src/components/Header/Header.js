import { useEffect, useState, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import "./header.css"
import Strelka from "../../assets/img/strelka.svg"
import Logo from "../../assets/img/logo.svg"
import { Select } from "../select/select"
import axios from "axios"
import { useAuth } from "../../hook/hook"
import { Lang } from "../../Pages/Lang/Lang"
import { LangContext } from "../../context/LangContext"
export const Header = () => {

    const { token } = useAuth()
    const { lang: til, } = useContext(LangContext)
    const [selectModal, setSelectModal] = useState(false)
    const [me, setMe] = useState({})

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/user/me`, {
            headers: {
                Authorization: token.token
            }
        }).then(data => setMe(data.data)).catch(err => console.log(err))
    }, [token])

    return (
        <div className={`home`}>
            <div className="container home__container">
                <header className="header">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    <nav className="sitenav">
                        <ul>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive
                                        ? "active-link d-inline-block"
                                        : "text-decoration-none"
                                } to="/home">{Lang[til].homePage.home}</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive
                                        ? "active-link d-inline-block"
                                        : "text-decoration-none"
                                } to="/books">{Lang[til].homePage.book}</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div onClick={() => { setSelectModal(true) }} className="select">
                        <img className="brat" src={`https://book-service-layer.herokuapp.com/${me.image}`} alt="" />
                        <img className="ms-2" src={Strelka} alt="" />
                    </div>
                    <Select setSelectModal={setSelectModal} selectModal={selectModal} />
                </header>
            </div>
        </div>
    )
}