import React from "react"

import "./book-content.style.css"
const BookContent = ({ book, currentBlink }) => {
    const content = book.data[currentBlink].content
    const title = book.data[currentBlink].title

    return (
        <div className="book-content">
            <h2> {title} </h2>
            <p> {content} </p>
        </div>
    )
}

export default BookContent