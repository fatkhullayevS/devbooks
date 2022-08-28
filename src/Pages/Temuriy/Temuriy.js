import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Card } from "../../components/card/Card"
import { Home } from "../../components/Home/Home"

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
            <Home />
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