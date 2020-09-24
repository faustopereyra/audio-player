import React, { useState, useEffect } from "react"

//import MenuToggle from "../../components/menu-toggle/menu-toggle.component"
import AudioToggle from "../../components/audio-toggle/audio-toggle.component"
import BookContent from "../../components/book-content/book-content.component"
import AudioPlayerLarge from "../../components/audio-player-large/audio-player-large.component"
import BackBtn from "../../components/back-btn/back-btn.component"
import ChangeBlinkBtn from "../../components/change-blink-btn/change-blink-btn.component"
import AudioPlayerLayer from "../audio-player/audio-player-layer.component"

import "./book.style.css"

const Book = ({ theme, book, setBook }) => {

    const [blink, setBlink] = useState(0)
    const [toggleAudio, setToggleAudio] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [audioBook] = useState(new Audio(require(`../../media/audio/${book.audioUrl}`)));

    const [AudioCurrentTime, setAudioCurrentTime] = useState(0)

    useEffect(() => {

        isPlaying ? audioBook.play() : audioBook.pause();

    }, [isPlaying, audioBook]);


    const setCurrentTime = () => {
        setAudioCurrentTime(audioBook.currentTime)
    }

    audioBook.ontimeupdate = setCurrentTime

    return (
        <div className="book">
            <div className="book-content-icon">
                <AudioToggle theme={theme} toggle={setToggleAudio} state={toggleAudio} />
                <BackBtn theme={theme} setBook={setBook} setIsPlaying={setIsPlaying} />
            </div>
            <div className={`book-content-layout ${toggleAudio ? "blur" : ""} `}>
                <ChangeBlinkBtn type="prev" theme={theme} currentBlink={blink} setBlink={setBlink} totalBlinks={book.data.length} />
                <BookContent book={book} currentBlink={blink} />
                <ChangeBlinkBtn type="next" theme={theme} currentBlink={blink} setBlink={setBlink} totalBlinks={book.data.length} />
            </div>
            <AudioPlayerLarge duration={audioBook.duration} toggleAudio={toggleAudio} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentTime={AudioCurrentTime} audioBook={audioBook} />
            {toggleAudio ? <AudioPlayerLayer book={book} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioBook={audioBook} currentTime={AudioCurrentTime} /> : ""}

        </div>
    )
}

export default Book

//<MenuToggle theme={theme} />