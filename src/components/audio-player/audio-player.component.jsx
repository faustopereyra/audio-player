import React from "react"

import AudioPlayerMedia from "../audio-player-media/audio-player-media.component"
import AudioPlayerBar from "../audio-player-bar/audio-player-bar.component"
import AudioPlayerControls from "../audio-player-controls/audio-player-controls.component"

import "./audio-player.style.css"
const AudioPlayer = () => {
    return (
        <div className="player-container">
            <AudioPlayerMedia />
            <AudioPlayerBar />
            <AudioPlayerControls />
        </div>
    )
}

export default AudioPlayer