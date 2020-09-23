import React from "react"

import MenuToggle from "../../components/menu-toggle/menu-toggle.component"
import AudioToggle from "../../components/audio-toggle/audio-toggle.component"
import BookContent from "../../components/book-content/book-content.component"
import AudioPlayerLarge from "../../components/audio-player-large/audio-player-large.component"
import BackBtn from "../../components/back-btn/back-btn.component"
//import AudioPlayerLayer from "../audio-player/audio-player-layer.component"

import "./book.style.css"

const Book = ({ theme, book, setBook }) => {
    return (
        <div className="book">
            <div className="book-content-icon">
                <MenuToggle theme={theme} />
                <AudioToggle theme={theme} />
                <BackBtn theme={theme} setBook={setBook} />
            </div>
            <BookContent book={book} />
            <AudioPlayerLarge book={book} />

        </div>
    )
}

export default Book

//<AudioPlayerLayer />