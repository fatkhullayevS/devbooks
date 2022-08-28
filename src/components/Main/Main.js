import './Main.css'
import Search from "../../assets/img/search-icon.svg"
import { useContext, useRef, useState } from 'react'
import { Lang } from '../../Pages/Lang/Lang'
import { LangContext } from '../../context/LangContext'

export const Main = () => {

    const { lang: til, } = useContext(LangContext)
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
                    <h1 className="hero__heading">{Lang[til].homePage.heroHeading}</h1>
                    <div className="hero__search">
                        <form onSubmit={handleValue} className="hero__form">
                            <h3>{Lang[til].homePage.search}</h3>
                            <input ref={inputValue} type="search" placeholder={Lang[til].homePage.searchPleaceholder} />
                            <button className='hero__form-btn' type="submit"><img src={Search} alt="" width={24} height={24} /></button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="category">
                <div className="container category__container">
                    <h1>{Lang[til].homePage.Allcategory}</h1>
                </div>
            </section>
        </main>
    )
}