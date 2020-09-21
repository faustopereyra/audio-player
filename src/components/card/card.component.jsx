import React from "react"

import "./card.style.css"

const Card = ({ book }) => {
    <div className="card">
        <div className="card--top"> <img src={book.img} alt={book.title} /></div>
        <div className="card--bottom">
            <div className="title"> <h3>{book.title}</h3> </div>
            <div className="author"> <h4>{book.author}</h4> </div>
        </div>
    </div>
}

export default Card