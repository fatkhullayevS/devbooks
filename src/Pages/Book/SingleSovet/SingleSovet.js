import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Header } from "../../../components/Header/Header"
import { useAuth } from "../../../hook/hook"
import "./single-sovet.css"
import Subtract from "../../../assets/img/Subtract.svg"
import Book from "../../../assets/img/book.svg"
import Naushnik from "../../../assets/img/naushnik.svg"
import Elek from "../../../assets/img/elek.svg"
import { BookCard } from "../BookCard/BookCard"


export const SingleSovet = () => {
    const { token } = useAuth()
    const [data, setData] = useState({})
    const [title, setTitle] = useState({})
    const [book, setBook] = useState({})

    console.log(title);
    const { id } = useParams()
    console.log(data);

    useEffect(() => {
        fetch("https://book-service-layer.herokuapp.com/book/genreId/3")
            .then(res => res.json())
            .then((data) => setBook(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/book/bookId/${id}`, {
            headers: {
                Authorization: token.token,
            }
        }).then(data => setData(data.data)).catch(err => console.log(err))
    }, [token])

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${data.author_id}`, {
            headers: {
                Authorization: token.token,
            }
        }).then(data => setTitle(data.data)).catch(err => console.log(err))
    }, [token, title])

    return (
        <>
            <Header />
            <div className="single-book__temuriy">
                <div className="container single__container">
                    <img src={data.image} alt={data.title} width={519} height={810} />
                    <div className="single__right">
                        <h1>{data.title}</h1>
                        <div className="d-flex">
                            <p className="single__desc">{title?.first_name}</p>
                            <p className="single__desc ms-2">{title?.last_name} <span className="ms-3">|</span></p>
                            <p className="single__desc ms-3">4.1</p>
                        </div>
                        <p className="page pt-5">Sahifalar soni: <strong>{data.page}</strong></p>
                        <p className="page pt-3">Chop etilgan: <strong>2021</strong></p>
                        <p className="page pt-3">Janri: <strong>{data.genre_id === 3 ? "Sovet" : "hech nima"}</strong></p>
                        <p className="page pt-3">Nashriyot:<strong> Qamar books: </strong></p>
                        <div className="d-flex pt-3">
                            <p className="reseption">To'liq Ma'lumot</p>
                            <img className="ms-3" src={Subtract} alt="" />
                        </div>
                        <hr />
                        <p className="desc">{data.description}</p>
                        <p className="format">Mavjud formatlar</p>
                        <div className="d-flex align-items-center">
                            <div className="text-center">
                                <img src={Book} alt="" width={24} height={24} />
                                <h5>Qog’oz kitob</h5>
                                <p>{data.price} ming so'm</p>
                            </div>
                            <div className="text-center ms-5">
                                <img src={Naushnik} alt="" width={24} height={24} />
                                <h5>Audiokitob</h5>
                                <p>6:23 soat</p>
                            </div>
                            <div className="text-center ms-5">
                                <img src={Elek} alt="" width={24} height={24} />
                                <h5>Elektron</h5>
                                <p>pdf, epub, rar</p>
                            </div>
                            <button>Javonga qo’shish </button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex mt-5 align-items-center justify-content-between">
                        <h2 className="h2">Sizga yoqishi mumkin</h2>
                        <Link className="text-decoration-none" to="/books">Barchasini ko'rish</Link>
                    </div>
                    <div className="container">
                        <div className="row">
                            {book.length && book.map(e => (
                                <>
                                    <BookCard key={e.id} item={e} />
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}