import React from "react"

import AudioPlayerMedia from "../audio-player-media/audio-player-media.component"
import AudioPlayerBar from "../audio-player-bar/audio-player-bar.component"
import AudioPlayerControls from "../audio-player-controls/audio-player-controls.component"

import "./audio-player.style.css"
const AudioPlayer = ({ book, isPlaying, setIsPlaying, audioBook, currentTime }) => {
    const { duration } = audioBook;

    return (
        <div className="player-container">
            <AudioPlayerMedia book={book} />
            <AudioPlayerBar duration={duration} currentTime={currentTime} audioBook={audioBook} />
            <AudioPlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioBook={audioBook} />
        </div>
    )
}

export default AudioPlayer