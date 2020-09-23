import React from "react"

import "./audio-player-bar.style.css"
const AudioPlayerBar = () => {
    return (
        <div className="progress-container" id="progress-container">
            <div className="progress" id="progress"></div>
            <div className="duration-wrapper">
                <span id="current-time">0:00</span>
                <span id="duration">2:06</span>
            </div>
        </div>
    )
}

export default AudioPlayerBar