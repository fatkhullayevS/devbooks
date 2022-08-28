import { useContext, useEffect } from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../hook/hook";
import { useState } from "react";
import { Header } from "../../components/Header/Header";
import "./single-mustaqillik.css"
import Saved from "../../assets/img/saved.svg"
import { AuthorBook } from "../../components/AuthorBook/AuthorBook";
import { LangContext } from "../../context/LangContext";
import { Lang } from "../Lang/Lang";

export const SinglePageMustaqillik = () => {
    const { lang: til } = useContext(LangContext)
    const { token } = useAuth()
    const { id } = useParams()
    const [data, setData] = useState({})
    const [books, setBooks] = useState({})

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${id}`, {
            headers: {
                Authorization: token.token,
            }
        }).then(data => setData(data.data)).catch(err => console.log(err))
    }, [token])

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/author/books/${id}`, {
            headers: {
                Authorization: token.token,
            }
        }).then(data => setBooks(data.data)).catch(err => console.log(err))
    }, [token])


    return (
        <>
            <Header />
            <div className="single-author">
                <div className="single-author__top d-flex">
                    <img src={`https://book-service-layer.herokuapp.com/${data.image}`} alt="" width={582} height={779} />
                    <div className="single-author__block">
                        <div className="d-flex">
                            <h1>{data.first_name}</h1>
                            <h1 className="ms-3">{data.last_name}</h1>
                        </div>
                        <p>{data.bio}</p>
                        <div className="d-flex creativity">
                            <img src={Saved} alt="" />
                            <h2>{Lang[til].singleAuthor.creativity}</h2>
                        </div>
                        <p>{data.bio}</p>
                        <div className="d-flex">
                            <h3>{Lang[til].singleAuthor.works}</h3>
                            <Link to="/books">{Lang[til].singleAuthor.all}</Link>
                        </div>
                        <div className="row">
                            {books.length && books.map(e => (
                                <div className="col-3">
                                    <AuthorBook item={e} key={e.id} />
                                </div>
                            ))}
                        </div>
                        <div className="birthday d-flex">
                            <div className="birthday-left">
                                <h5>{Lang[til].singleAuthor.birthDay}</h5>
                                <h2>{data.date_of_birth}-{Lang[til].singleAuthor.year}</h2>
                                <h5>{Lang[til].singleAuthor.birthDay}</h5>
                            </div>

                            <div className="birthday-right">
                                <h5>{Lang[til].singleAuthor.deadDay}</h5>
                                <h2>{data.date_of_death}-{Lang[til].singleAuthor.year}</h2>
                                <h5>{Lang[til].singleAuthor.deadDay}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}