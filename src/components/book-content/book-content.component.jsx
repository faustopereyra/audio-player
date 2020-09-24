import React from "react"

import "./book-content.style.css"
const BookContent = ({ book, currentBlink }) => {
    let content = book.data[currentBlink].content
    content = content.replace(/\n/g, "<br>")

    const title = book.data[currentBlink].title

    return (
        <div className="book-content">
            <h2> {title} </h2>
            <p contentEditable='true' dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
    )
}

export default BookContent