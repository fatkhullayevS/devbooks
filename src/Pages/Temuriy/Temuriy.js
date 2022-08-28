import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Card } from "../../components/card/Card"
import { Category } from "../../components/Category/category"
import { Header } from "../../components/Header/Header"
import { Main } from "../../components/Main/Main"

export const Temuriy = () => {
    const [temuriy, setTemuriy] = useState({})

    useEffect(() => {
        fetch("https://book-service-layer.herokuapp.com/author/genreId/1")
            .then(res => res.json())
            .then((data) => setTemuriy(data))
            .catch(err => console.log(err))

    }, [])
    return (
        <>
            <Header />
            <Main />
            <Category />
            <div className="container">
                <div className="row">
                    {temuriy.length && temuriy.map(e => (
                        <>
                            <Card key={e.id} item={e} />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}