import { useEffect } from "react"
import { useState } from "react"
import { Card } from "../../components/card/Card"
import { Home } from "../../components/Home/Home"

export const Mustaqillik = () => {
    const [Mustaqillik, setMustaqillik] = useState({
        isLoading: true,
        isError: false,
        data: {}
    })

    useEffect(() => {
        fetch("https://book-service-layer.herokuapp.com/author/genreId/4")
            .then(res => res.json())
            .then((data) => setMustaqillik(data))
            .catch((err) => console.log(err))

    }, [])
    return (
        <>
            <Home />
            <div className="container">
                <div className="row">
                    {Mustaqillik.length && Mustaqillik.map(e => (
                        <>
                            <Card key={e.id} item={e} />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}