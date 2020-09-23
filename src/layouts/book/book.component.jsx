import React, { useState } from "react"

import MenuToggle from "../../components/menu-toggle/menu-toggle.component"
import AudioToggle from "../../components/audio-toggle/audio-toggle.component"
import BookContent from "../../components/book-content/book-content.component"
import AudioPlayerLarge from "../../components/audio-player-large/audio-player-large.component"
import BackBtn from "../../components/back-btn/back-btn.component"
import ChangeBlinkBtn from "../../components/change-blink-btn/change-blink-btn.component"
//import AudioPlayerLayer from "../audio-player/audio-player-layer.component"

import "./book.style.css"

const Book = ({ theme, book, setBook }) => {

    const [blink, setBlink] = useState(0)

    return (
        <div className="book">
            <div className="book-content-icon">
                <MenuToggle theme={theme} />
                <AudioToggle theme={theme} />
                <BackBtn theme={theme} setBook={setBook} />
            </div>
            <div className="book-content-layout">
                <ChangeBlinkBtn type="prev" theme={theme} currentBlink={blink} setBlink={setBlink} totalBlinks={book.data.length} />
                <BookContent book={book} currentBlink={blink} />
                <ChangeBlinkBtn type="next" theme={theme} currentBlink={blink} setBlink={setBlink} totalBlinks={book.data.length} />
            </div>
            <AudioPlayerLarge book={book} />

        </div>
    )
}

export default Book

//<AudioPlayerLayer />