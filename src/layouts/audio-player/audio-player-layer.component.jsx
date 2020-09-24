import React from "react"
import AudioPlayer from "../../components/audio-player/audio-player.component"

import "./audio-player-layer.style.css"

const AudioPlayerLayer = ({ book, isPlaying, setIsPlaying, audioBook, currentTime }) => {
    //console.log(audioBook)
    return (
        <div className="audio-player-layer">
            <AudioPlayer book={book} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioBook={audioBook} currentTime={currentTime} />
        </div >
    )
}

export default AudioPlayerLayer