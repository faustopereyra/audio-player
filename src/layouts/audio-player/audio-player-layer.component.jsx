import React from "react"
import AudioPlayer from "../../components/audio-player/audio-player.component"

import "./audio-player-layer.style.css"

const AudioPlayerLayer = () => {
    return (
        <div className="audio-player-layer">
            <AudioPlayer />
        </div>
    )
}

export default AudioPlayerLayer