import React from "react"

import "./book-content.style.css"
const BookContent = ({ book }) => {
    const content = book.data[1].content
    const title = book.data[1].title

    return (
        <div className="book-content">
            <h2> {title} </h2>
            <p> {content} </p>
        </div>
    )
}

export default BookContent