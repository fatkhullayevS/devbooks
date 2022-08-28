import { Link } from "react-router-dom"
import "./card.css"

export const Card = ({ item }) => {
    return (
        <>
            <Link to={`${item.id}`} className="col-2 text-decoration-none text-white">
                <div className="card-author">
                    <img src={`https://book-service-layer.herokuapp.com/${item.image}`} alt={item.first_name} width={173} height={132} />
                    <h3 className="text-dark">{item.first_name}</h3>
                    <div className="d-flex ms-5">
                        <p>{item.date_of_birth}</p>
                        <p>-{item.date_of_death}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}