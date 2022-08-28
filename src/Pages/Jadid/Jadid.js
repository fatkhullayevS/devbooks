import { useEffect } from "react"
import { useState } from "react"
import { Card } from "../../components/card/Card"
import { Home } from "../../components/Home/Home"

export const Jadid = () => {
    const [Jadid, setJadid] = useState({})

    useEffect(() => {
        fetch("https://book-service-layer.herokuapp.com/author/genreId/2")
            .then(res => res.json())
            .then((data) => setJadid(data))
            .catch(err => console.log(err))

    }, [])
    return (
        <>
            <Home />
            <div className="container">
                <div className="row">
                    {Jadid.length && Jadid.map(e => (
                        <>
                            <Card key={e.id} item={e} />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}