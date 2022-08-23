import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import RegisterIcon from "../../assets/img/register-icon.svg"
import "./register.css"

export const Register = () => {

    const elUserName = useRef("")
    const elLastName = useRef("")
    const elPhone = useRef("")
    const elEmail = useRef("")
    const elPassword = useRef("")
    const navigate = useNavigate()

    const hanldeForm = (evt) => {
        evt.preventDefault()
        const formdata = new FormData()

        formdata.append("first_name", elUserName.current.value)
        formdata.append("last_name", elLastName.current.value)
        formdata.append("phone", elPhone.current.value)
        formdata.append("email", elEmail.current.value)
        formdata.append("password", elPassword.current.value)

        axios
            .post("https://book-service-layer.herokuapp.com/user/register/", formdata)
            .then((data) => {
                if (data) {
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className="container">
                <div className="register">
                    <div className="register__left">
                        <img className="register__img" src={RegisterIcon} alt="" width={500} height={500} />
                    </div>
                    <div className="register__right">
                        <h3>Sign up</h3>
                        <p>Already have an account? <Link to="/login">Sign in</Link></p>
                        <form onClick={hanldeForm} className="register__form">
                            <input ref={elUserName} type="text" placeholder="First name" />
                            <input ref={elLastName} type="text" placeholder="Last name" />
                            <input ref={elPhone} type="number" placeholder="Phone" />
                            <input ref={elEmail} type="email" placeholder="Email" />
                            <input ref={elPassword} type="password" placeholder="Password" />
                            <button type="submit">Next step</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}