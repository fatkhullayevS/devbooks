import { Route, Routes } from "react-router-dom"
import { Login } from "./Login/Login"
import { Register } from "./Register/Register"

export const Private = () => {
    return (
        <Routes>
            <Route path="/" element={<Register />} />
        </Routes>
    )
}