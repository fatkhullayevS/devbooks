import { Link } from "react-router-dom"
import "./account.css"
import { SettingsNav } from "./settingsNav/settingsNav"
import Brat from "../../assets/img/brat.png"
import { useContext, useEffect, useRef } from "react"
import axios from "axios"
import { useAuth } from "../../hook/hook"
import { useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
export const Account = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    const { token } = useAuth()
    const [me, setMe] = useState({})

    const elFirtsName = useRef("")
    const elLastName = useRef("")
    const elPhone = useRef("")
    const elImage = useRef("")

    const handleEdit = (evt) => {
        evt.preventDefault()

        const formData = new FormData()

        formData.append("first_name", elFirtsName.current.value)
        formData.append("last_name", elLastName.current.value)
        formData.append("phone", elPhone.current.value)
        formData.append("image", elImage.current.files[0])

        axios.put(`https://book-service-layer.herokuapp.com/user/account`, formData, {
            headers: {
                Authorization: token.token
            }
        }).then(data => console.log(data.data)).catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/user/me`, {
            headers: {
                Authorization: token.token
            }
        }).then(data => setMe(data.data)).catch(err => console.log(err))
    }, [token])

    return (
        <div className={`${theme} account`}>
            <div className="container">
                <SettingsNav />
                <div className="row">
                    <div className="col-3 mt-5">
                        <img src={`https://book-service-layer.herokuapp.com/${me.image}`} alt="" width={175} height={175} />
                    </div>
                    <div className="col-9">
                        <h3>My Profile</h3>
                        <form onSubmit={handleEdit} className="form-acc">
                            <label className="d-block" htmlFor="FirtsName">First Name</label>
                            <input ref={elFirtsName} defaultValue={me.first_name} className="d-block input-acc" type="text" id="FirtsName" placeholder="Firts Name" />
                            <p>Please enter your first name.</p>
                            <label className="d-block" htmlFor="LastName">Last Name</label>
                            <input ref={elLastName} defaultValue={me.last_name} className="d-block input-acc" type="text" id="LastName" placeholder="Last Name" />
                            <p>Please enter your last name.</p>
                            <label className="d-block" htmlFor="Phone">Phone</label>
                            <input ref={elPhone} defaultValue={me.phone} className="d-block input-acc" type="number" id="Phone" placeholder="Phone" />
                            <p>Please enter your  phone number.</p>
                            <input className="file-img" ref={elImage} type="file" />
                            <button type="submit">Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}