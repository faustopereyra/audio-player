import React from "react"

import "./audio-player-media.style.css"

const AudioPlayerMedia = () => {
    return (
        <div>
            <div className="img-container"><img src={require(`../../media/book-art/flow.png`)} alt="flow" /></div>
            <h3 className="audio-title" id="title">Flow</h3>
            <h4 className="audio-author">Mihály Csíkszentmihályi</h4>
            <audio src="../../media/book-in-blinks/flow.mp3"></audio>
        </div>
    )
}

export default AudioPlayerMedia
