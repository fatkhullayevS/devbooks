import './Main.css'
import Search from "../../assets/img/search-icon.svg"
import { useRef, useState } from 'react'

export const Main = () => {

    const [value, setValue] = useState("")
    const inputValue = useRef("")
    const handleValue = (evt) => {
        evt.preventDefault()
        let value = evt.target[0].value

        fetch(`https://book-service-layer.herokuapp.com/author/search?author=${value}`)
            .then((res) => res.json())
            .then((data) => setValue(data))
            .catch(err => console.log(err))
        evt.target[0].value = null
    }

    return (
        <main>
            <section className="hero">
                <div className="container hero__container">
                    <h1 className="hero__heading">Temuriylar davri adabiyoti</h1>
                    <div className="hero__search">
                        <form onSubmit={handleValue} className="hero__form">
                            <h3>Qidirish</h3>
                            <input ref={inputValue} type="search" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
                            <button className='hero__form-btn' type="submit"><img src={Search} alt="" width={24} height={24} /></button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="category">
                <div className="container category__container">
                    <h1>Asosiy kategoriyalar</h1>
                </div>
            </section>
        </main>
    )
}