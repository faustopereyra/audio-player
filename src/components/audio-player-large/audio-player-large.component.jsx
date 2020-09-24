import React from "react"

import AudioPlayerBar from "../audio-player-bar/audio-player-bar.component"
import AudioPlayerControls from "../audio-player-controls/audio-player-controls.component"

import "./audio-player-large.style.css"

const AudioPlayerLarge = ({ toggleAudio, isPlaying, setIsPlaying, currentTime, setCurrentTime, duration, audioBook }) => { // book ?

    return (
        <div className={`large-player ${toggleAudio ? "blur" : ""} `}>
            <AudioPlayerControls large={true} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioBook={audioBook} />
            <AudioPlayerBar currentTime={currentTime} setCurrentTime={setCurrentTime} audioBook={audioBook} duration={duration} />
        </div>
    )
}

export default AudioPlayerLarge