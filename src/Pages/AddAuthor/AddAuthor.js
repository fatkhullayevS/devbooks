import axios from 'axios'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Avloniy from '../../assets/img/avloniy.jpg'
import { useAuth } from '../../hook/hook'
import "./add-author.css"

export const AddAuthor = () => {

    const { token } = useAuth()

    const elImg = useRef("")
    const elFirtsName = useRef("")
    const elLastName = useRef("")
    const elBirthDay = useRef("")
    const elDeadDay = useRef("")
    const elCountry = useRef("")
    const elGenre = useRef("")
    const elBio = useRef("")

    const elHandleCreate = (evt) => {
        evt.preventDefault()

        const formdata = new FormData()

        formdata.append("first_name", elFirtsName.current.value)
        formdata.append("last_name", elLastName.current.value)
        formdata.append("date_of_birth", elBirthDay.current.value)
        formdata.append("date_of_death", elDeadDay.current.value)
        formdata.append("country", elCountry.current.value)
        formdata.append("genre_id", elGenre.current.value)
        formdata.append("bio", elBio.current.value)
        formdata.append("image", elImg.current.files[0])

        axios
            .post(`https://book-service-layer.herokuapp.com/author`, formdata, {
                headers: {
                    Authorization: token.token,
                }
            }).then(data => console.log(data.data)).catch(err => console.log(err))
    }

    return (
        <>
            <div className='author-add'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Link className='text-decoration-none' to="/">Bosh sahifaga qaytish</Link>
                            <img className='avloniy' src={Avloniy} alt="" width={350} height={266} /><br />
                        </div>
                        <div className='col-6'>
                            <h1>Add book</h1>
                            <form onSubmit={elHandleCreate} className='form d-inline-block'>
                                <input ref={elFirtsName} className='d-block input' type="text" placeholder='first name' />
                                <input ref={elLastName} className='d-block input' type="text" placeholder='last name' />
                                <input ref={elBirthDay} className='d-block input' type="number" placeholder='Birth Day' />
                                <input ref={elDeadDay} className='d-block input' type="number" placeholder="Death day" />
                                <input ref={elCountry} className='d-block input' type="text" placeholder="country" />
                                <select ref={elGenre} className='select d-block input'>
                                    <option value="1">Temuriy</option>
                                    <option value="2">Jadid</option>
                                    <option value="3">Sovet</option>
                                    <option value="4">Mustaqillik</option>
                                </select>
                                <textarea ref={elBio} className="textarea" placeholder='bio'></textarea>
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