import React from "react"

import AudioPlayerBar from "../audio-player-bar/audio-player-bar.component"
import AudioPlayerControls from "../audio-player-controls/audio-player-controls.component"

import "./audio-player-large.style.css"

const AudioPlayerLarge = () => {
    return (
        <div className="large-player">
            <AudioPlayerControls large={true} />
            <AudioPlayerBar />
        </div>
    )
}

export default AudioPlayerLarge