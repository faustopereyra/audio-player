import React from "react"

import "./audio-toggle.style.css"

const AudioToggle = ({ theme, toggle, state }) => {
    let color
    if (theme) {

        color = "black"
    } else {
        color = "white"
    }
    return (
        <div className="audio-toggle" onClick={() => toggle(!state)}>
            <img src={require(`../../media/icon/headphones-${color}.png`)} alt="Audio Player" />
        </div>
    )
}

export default AudioToggle