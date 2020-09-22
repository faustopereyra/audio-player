import React from "react"

import "./audio-toggle.style.css"

const AudioToggle = ({ theme }) => {
    let color
    if (theme) {

        color = "black"
    } else {
        color = "white"
    }
    console.log(color)
    return (
        <div className="audio-toggle">
            <img src={require(`../../media/icon/headphones-${color}.png`)} alt="Audio Player" />
        </div>
    )
}

export default AudioToggle