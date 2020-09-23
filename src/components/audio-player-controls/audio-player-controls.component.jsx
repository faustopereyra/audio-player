import React from "react"

import "./audio-player-controls.style.css"
const AudioPlayerControls = ({ large, image }) => {
    return (
        <div className={`player-controls ${large ? "" : "layer-player"} `}>
            <div className="control backward"><img src={require(`../../media/icon/fast-backward.png`)} alt="backward" /></div>
            <div className="control play"><img src={require(`../../media/icon/play-btn.png`)} alt="play/pause" /></div>
            <div className="control forward"><img src={require(`../../media/icon/fast-foward.png`)} alt="forward" /></div>
        </div>
    )
}

export default AudioPlayerControls