import React from "react"

import "./audio-player-controls.style.css"
const AudioPlayerControls = ({ large, isPlaying, setIsPlaying, audioBook }) => {

    const backward = () => {
        if (audioBook.currentTime > 30) {
            audioBook.currentTime = audioBook.currentTime - 30
        } else audioBook.currentTime = 0;
    }

    const forward = () => {
        if (audioBook.currentTime < audioBook.duration - 30) {
            audioBook.currentTime = audioBook.currentTime + 30
        } else {
            audioBook.currentTime = 0;
            setIsPlaying(false)
        }
    }

    //console.log(isPlaying)
    return (
        <div className={`player-controls ${large ? "" : "layer-player"} `}>
            <div className="control backward" onClick={backward} ><img src={require(`../../media/icon/fast-backward.png`)} alt="backward" /></div>
            <div className="control play" onClick={() => setIsPlaying(!isPlaying)} ><img src={require(`../../media/icon/${isPlaying ? "pause" : "play"}-btn.png`)} alt="play/pause" /></div>
            <div className="control forward" onClick={forward}><img src={require(`../../media/icon/fast-foward.png`)} alt="forward" /></div>
        </div>
    )
}

export default AudioPlayerControls