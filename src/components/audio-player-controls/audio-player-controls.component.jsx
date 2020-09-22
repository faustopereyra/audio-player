import React from "react"

import "./audio-player-controls.style.css"
const AudioPlayerControls = ({ large }) => {
    return (
        <div class={`player-controls ${large ? "" : "layer-player"} `}>
            <div class="control backward"><img src={require(`../../media/icon/fast-backward.png`)} alt="backward" /></div>
            <div class="control play"><img src={require(`../../media/icon/play-btn.png`)} alt="play/pause" /></div>
            <div class="control forward"><img src={require(`../../media/icon/fast-foward.png`)} alt="forward" /></div>
        </div>
    )
}

export default AudioPlayerControls