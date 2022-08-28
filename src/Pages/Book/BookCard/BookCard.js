import { useEffect } from "react"
import "./book-card.css"
import axios from "axios";
import { useAuth } from "../../../hook/hook"
import { useState } from "react"
import { Link } from "react-router-dom";

export const BookCard = ({ item }) => {
    const { token } = useAuth()

    const [data, setData] = useState([])
    console.log(data.data);

    //    c(`${data?.first_name}-${data?.last_name}`);

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${item.author_id}`, {
            headers: {
                Authorization: token.token,
            }
        }).then(data => setData(data.data)).catch(err => console.log(err))
    }, [token, item])
    return (
        <>
            <Link to={`${item.id}`} className="col-2 text-decoration-none text-white">
                <div className="card-author">
                    <img src={`https://book-service-layer.herokuapp.com/${item.image}`} alt={item.title} width={120} height={150} />
                    <h3 className="text-dark">{item.title}</h3>
                    <div className="d-flex ms-3">
                        <p>{data?.first_name}-</p>
                        <p>{data?.last_name}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}