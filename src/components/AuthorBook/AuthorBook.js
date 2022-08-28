import "./author-book.css"

export const AuthorBook = ({ item }) => {

    return (
        <div className="books-render">
            <div>
                <img src={`https://book-service-layer.herokuapp.com/${item.image}`} alt={item.title} />
                <h4>{item.title}</h4>
                <span>4.1 - 3400 ta fikrlar</span>
            </div>
        </div>
    )
}