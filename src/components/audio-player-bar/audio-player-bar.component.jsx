import React, { useRef } from "react"

import "./audio-player-bar.style.css"
const AudioPlayerBar = ({ duration, currentTime, audioBook }) => {

    const bar = useRef()

    //Calculate Total duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
    }

    //Calculate Current time
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
    }

    //Calculate progress Percent
    const progressPercent = (currentTime / duration) * 100;


    const setProgressBar = (e) => {
        if (duration) {
            console.log(e.target.clientWidth)

            console.log(e.nativeEvent.offsetX)
            console.log(e.nativeEvent.offsetWidth)

            const width = e.target.clientWidth
            const clickX = e.nativeEvent.offsetX
            audioBook.currentTime = (clickX / width) * duration
        }

    }
    //

    return (
        <div onClick={setProgressBar} className="progress-container" >
            <div className="progress" style={{ width: `${progressPercent}%` }} ></div>
            <div className="duration-wrapper">
                <span>{`${currentMinutes}:${currentSeconds}`} </span>
                <span>{duration ? `${durationMinutes}:${durationSeconds}` : "00:00"}</span>
            </div>
        </div>
    )
}

export default AudioPlayerBar