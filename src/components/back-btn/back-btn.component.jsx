import React from "react"

import "./back-btn.style.css"

const BackBtn = ({ theme, setBook }) => {
    let color
    if (theme) {

        color = "dark"
    } else {
        color = "light"
    }
    return (
        <div className="back-btn" onClick={() => setBook(false)}>
            <img src={require(`../../media/icon/back-${color}.png`)} alt="Go Back" />
        </div>
    )
}

export default BackBtn 