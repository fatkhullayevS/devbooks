import { Link, NavLink } from "react-router-dom"
import Logo from "../../assets/img/logo.svg"
import "./home.css"

export const Home = () => {
    return (
        <div className="home">
            <div className="container home__container">
                <header className="header">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    <nav className="sitenav">
                        <ul>
                            <li>
                                <NavLink to="/home">Bosh sahifa</NavLink>
                            </li>
                            <li>
                                <NavLink to="/books">Kitoblar</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            <main>
                <section className="hero">
                    <div className="container hero__container">
                        <h1 className="hero__heading">Temuriylar davri adabiyoti</h1>
                        <div className="hero__search">
                            <form className="hero__form">
                                <h3>Qidirish</h3>
                                <input type="search" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
                                <button type="submit"><img src="" alt="" /></button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}