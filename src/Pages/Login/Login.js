import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import RegisterIcon from "../../assets/img/register-icon.svg"
import { useAuth } from "../../hook/hook"
import "../Register/register.css"
import "./login.css"

export const Login = () => {
    const { setToken } = useAuth()
    const elEmail = useRef("")
    const elPassword = useRef("")
    const navigate = useNavigate()

    const hanldeForm = (evt) => {
        evt.preventDefault()
        const formdata = new FormData()

        formdata.append("email", elEmail.current.value)
        formdata.append("password", elPassword.current.value)

        axios
            .post(
                "https://book-service-layer.herokuapp.com/user/login",
                formdata
            )
            .then((data) => {
                if (data.data) {
                    setToken(data.data);
                    navigate('/home')
                    window.location.reload(true)
                }
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <div className="login">
                <div className="container">
                    <div className="register">
                        <div className="register__left">
                            <img className="register__img" src={RegisterIcon} alt="" width={500} height={500} />
                        </div>
                        <div className="register__right">
                            <h3>Sign up</h3>
                            <p>Do not you have an account? <Link to="/register">Sign up</Link></p>
                            <form onSubmit={hanldeForm} className="register__form">
                                <input ref={elEmail} type="email" placeholder="Email" />
                                <input ref={elPassword} type="password" placeholder="Password" />
                                <button type="submit">Next step</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}