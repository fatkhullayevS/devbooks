import './Main.css'
import Search from "../../assets/img/search-icon.svg"

export const Main = () => {
    return (
        <main>
            <section className="hero">
                <div className="container hero__container">
                    <h1 className="hero__heading">Temuriylar davri adabiyoti</h1>
                    <div className="hero__search">
                        <form className="hero__form">
                            <h3>Qidirish</h3>
                            <input type="search" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
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