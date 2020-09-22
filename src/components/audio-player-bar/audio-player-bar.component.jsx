import React from "react"

import "./audio-player-bar.style.css"
const AudioPlayerBar = () => {
    return (
        <div class="progress-container" id="progress-container">
            <div class="progress" id="progress"></div>
            <div class="duration-wrapper">
                <span id="current-time">0:00</span>
                <span id="duration">2:06</span>
            </div>
        </div>
    )
}

export default AudioPlayerBar