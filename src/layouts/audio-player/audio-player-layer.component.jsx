import React from "react"
import AudioPlayer from "../../components/audio-player/audio-player.component"

import "./audio-player-layer.style.css"

const AudioPlayerLayer = ({ book }) => {
    return (
        <div className="audio-player-layer">
            <AudioPlayer book={book} />
        </div >
    )
}

export default AudioPlayerLayer