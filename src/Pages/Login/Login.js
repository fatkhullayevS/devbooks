import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import RegisterIcon from "../../assets/img/register-icon.svg"

export const Login = () => {
    return (
        <>
            <div className="container">
                <div className="login">
                    <div className="login__left">
                        <img src={RegisterIcon} alt="" width={500} height={500} />
                    </div>
                </div>
            </div>
        </>
    )
}