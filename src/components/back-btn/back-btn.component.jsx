import React from "react"

import "./back-btn.style.css"

const BackBtn = ({ theme, setBook, setIsPlaying }) => {
    let color
    if (theme) {

        color = "dark"
    } else {
        color = "light"
    }

    const goBack = () => {
        setIsPlaying(false)
        setTimeout(() => {
            setBook(false)
        }, 300);
    }
    return (
        <div className="back-btn" onClick={goBack}>
            <img src={require(`../../media/icon/back-${color}.png`)} alt="Go Back" />
        </div>
    )
}

export default BackBtn 