import React from "react"

import MenuToggle from "../../components/menu-toggle/menu-toggle.component"
import AudioToggle from "../../components/audio-toggle/audio-toggle.component"
import BookContent from "../../components/book-content/book-content.component"

import "./book.style.css"

const Book = ({ theme }) => {
    return (
        <div className="book">
            <div className="book-content-icon">
                <MenuToggle theme={theme} />
                <AudioToggle theme={theme} />
            </div>
            <BookContent />
        </div>
    )
}

export default Book