import React from "react"

import "./card.style.css"

const Card = ({ book }) => {
    console.log(book.imageUrl)
    return (
        <div className="card">
            <div className="card--top"> <img src={require(`../../media/book-art/${book.imageUrl}`)} alt={book.title} /></div>
            <div className="card--bottom">
                <div className="title"> <h3>{book.title}</h3> </div>
                <div className="author"> <h4>{book.author}</h4> </div>
            </div>
        </div>
    )
}

//book.imageUrl

export default Card