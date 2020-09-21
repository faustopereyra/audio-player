import React from "react"

import "./card-selector.style.css"

const CardSelector = () => {
    return (
        <div className="card-selector">
            <div className="card-selector--reading">Currently Reading</div>
            <div className="card-selector--finished"> Finished</div>
        </div>
    )
}

export default CardSelector