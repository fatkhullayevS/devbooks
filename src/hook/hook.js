import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
    const { token, setToken, setIdAuthor } = useContext(AuthContext)

    return { token, setToken, setIdAuthor }
}