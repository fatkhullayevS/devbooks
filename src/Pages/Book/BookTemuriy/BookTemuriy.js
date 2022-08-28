import { useEffect } from "react"
import { useState } from "react"
import { Card } from "../../../components/card/Card"
import { Header } from "../../../components/Header/Header"
import { Main } from "../../../components/Main/Main"
import { BookCard } from "../BookCard/BookCard"
import { BookCategory } from "../BookCategory/BookCategory"
export const BookTemuriy = () => {
    const [bookTemuriy, setBookTemuriy] = useState({})

    useEffect(() => {
        fetch("https://book-service-layer.herokuapp.com/book/genreId/1")
            .then(res => res.json())
            .then((data) => setBookTemuriy(data))
            .catch(err => console.log(err))

    }, [])
    return (
        <>
            <Header />
            <Main />
            <BookCategory />
            <div className="container">
                <div className="row">
                    {bookTemuriy.length && bookTemuriy.map(e => (
                        <>
                            <BookCard key={e.id} item={e} />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}