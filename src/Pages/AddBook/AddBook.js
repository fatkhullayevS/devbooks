import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Ulugbek from "../../assets/img/ulugbek.jpg"
import { useAuth } from "../../hook/hook"

export const AddBook = () => {
    const { token } = useAuth()
    const [temuriy, setTemuriy] = useState({})

    useEffect(() => {
        fetch("https://book-service-layer.herokuapp.com/author/genreId/1")
            .then(res => res.json())
            .then((data) => setTemuriy(data))
            .catch(err => console.log(err))

    }, [])

    const elImg = useRef("")
    const elTitle = useRef("")
    const elPage = useRef("")
    const elPrice = useRef("")
    const elYear = useRef("")
    const elAuthor = useRef("")
    const elGenre = useRef("")
    const elDescription = useRef("")

    const elHandleCreate = (evt) => {
        evt.preventDefault()

        const formdata = new FormData()

        formdata.append("title", elTitle.current.value)
        formdata.append("page", elPage.current.value)
        formdata.append("year", elPrice.current.value)
        formdata.append("price", elYear.current.value)
        formdata.append("genre_id", elAuthor.current.value)
        formdata.append("author_id", elGenre.current.value)
        formdata.append("description", elDescription.current.value)
        formdata.append("image", elImg.current.files[0])

        axios
            .post(`https://book-service-layer.herokuapp.com/book`, formdata, {
                headers: {
                    Authorization: token.token,
                }
            }).then(data => console.log(data.data)).catch(err => console.log(err))
    }

    return (
        <>
            <div className="author-add">
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Link className='text-decoration-none' to="/">Bosh sahifaga qaytish</Link>
                            <img className='ulugbek' src={Ulugbek} alt="" width={300} height={482} /><br />
                        </div>
                        <div className='col-6'>
                            <h1>Add book</h1>
                            <form onSubmit={elHandleCreate} className='form d-inline-block'>
                                <input ref={elTitle} className='d-block input' type="text" placeholder='Title' />
                                <input ref={elPage} className='d-block input' type="number" placeholder='Pages' />
                                <input ref={elYear} className='d-block input' type="number" placeholder='Year' />
                                <input ref={elPrice} className='d-block input' type="text" placeholder="Price" />
                                <select ref={elGenre} className='select d-block input'>
                                    <option value="1">Temuriy</option>
                                    <option value="2">Jadid</option>
                                    <option value="3">Sovet</option>
                                    <option value="4">Mustaqillik</option>
                                </select>
                                <input ref={elAuthor} className='d-block input' type="text" placeholder="Price" />
                                <textarea ref={elDescription} className="textarea" placeholder='bio'></textarea>
                                <button className='files'><input ref={elImg} className="img-file" type="file" />upload cover</button>
                                <button className='create-btn' type='submit'>Create</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}