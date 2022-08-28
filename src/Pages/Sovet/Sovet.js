import { useEffect } from "react"
import { useState } from "react"
import { Card } from "../../components/card/Card"
import { Home } from "../../components/Home/Home"

export const Sovet = () => {
    const [Sovet, setSovet] = useState({})

    useEffect(() => {
        fetch("https://book-service-layer.herokuapp.com/author/genreId/3")
            .then(res => res.json())
            .then((data) => setSovet(data))
            .catch(err => console.log(err))

    }, [])
    return (
        <>
            <Home />
            <div className="container">
                <div className="row">
                    {Sovet.length && Sovet.map(e => (
                        <>
                            <Card key={e.id} item={e} />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}