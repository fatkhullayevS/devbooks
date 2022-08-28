import axios from "axios"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { useAuth } from "../../../hook/hook"
import { SettingsNav } from "../settingsNav/settingsNav"
import { Lang } from "../../Lang/Lang"
import { LangContext } from "../../../context/LangContext"
import "./security.css"

export const Security = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    const { lang: til } = useContext(LangContext)
    const { token } = useAuth()
    const [me, setMe] = useState({})

    const elEmail = useRef("")
    const elPassowrd = useRef("")
    const elNewPassword = useRef("")
    const elConPassword = useRef("")

    const handleSecurity = (evt) => {
        evt.preventDefault()

        const formData = new FormData()

        formData.append("email", elEmail.current.value)
        formData.append("currentPassword", elPassowrd.current.value)
        formData.append("newPassword", elNewPassword.current.value)

        if (elNewPassword.current.value !== elConPassword.current.value) {
            alert("Parol noto'g'ri terildi")
        } else {

        }

        axios.put(`https://book-service-layer.herokuapp.com/user/security`, formData, {
            headers: {
                Authorization: token.token
            }
        }).then(data => console.log(data)).catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/user/me`, {
            headers: {
                Authorization: token.token
            }
        }).then(data => setMe(data.data)).catch(err => console.log(err))
    }, [token])
    return (
        <div className={`${theme} security`}>
            <SettingsNav />
            <div className="container">
                <h3>{Lang[til].security.heading}</h3>
                <form onSubmit={handleSecurity} className="form-security">
                    <label className="d-block" htmlFor="Email">{Lang[til].security.email}</label>
                    <input ref={elEmail} defaultValue={me.email} className="d-block input-security" type="email" id="Email" placeholder="Email" />
                    <p>Please enter your first name.</p>
                    <label className="d-block" htmlFor="CurPassword">{Lang[til].security.curPass}</label>
                    <input ref={elPassowrd} defaultValue="" className="d-block input-security" type="password" id="CurPassword" placeholder="Current password" />
                    <p>Please enter your first name.</p>
                    <div className="d-flex">
                        <div>
                            <label className="d-block" htmlFor="Passowrd">{Lang[til].security.newPass}</label>
                            <input ref={elNewPassword} defaultValue="" className="d-block input-security" type="password" id="Passowrd" placeholder="Password" />
                            <p>Please enter your first name.</p>
                        </div>
                        <div>
                            <label className="d-block ms-4" htmlFor="ConPassword">{Lang[til].security.conPass}</label>
                            <input ref={elConPassword} defaultValue="" className="d-block input-security ms-4" type="password" id="ConPassword" placeholder="Coniform Password" />
                            <p className="ms-4">Please enter your first name.</p>
                        </div>
                    </div>
                    <button type="submit">{Lang[til].account.button}</button>
                </form>
            </div>
        </div>
    )
}