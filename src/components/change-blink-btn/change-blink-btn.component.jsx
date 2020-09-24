import React from "react"

import "./change-blink-btn.style.css"

const ChangeBlinkContentBtn = ({ theme, type, currentBlink, setBlink, totalBlinks }) => {
    let color

    theme ? color = "dark" : color = "light"

    const trigger = () => {
        if (type === "prev") {
            if (currentBlink !== 0) {
                setBlink(currentBlink - 1)
            }
        } else if (type === "next") {
            if (currentBlink !== totalBlinks - 1) {
                setBlink(currentBlink + 1)
            }
        }
    }
    return (
        <div className="change-blink-btn" onClick={() => trigger()} >
            <img src={require(`../../media/icon/${type}-${color}.png`)} alt={type === "prev" ? "Previous Blink" : "Next Blink"} />
        </div>
    )
}

export default ChangeBlinkContentBtn

