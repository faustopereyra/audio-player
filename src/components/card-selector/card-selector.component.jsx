import React from "react"

import "./card-selector.style.css"

const CardSelector = ({ finish, setfinish }) => {
    return (
        <div className="card-selector">
            <div className={`card-selector--reading ${finish ? "grey-filter" : "green-filter"}`} onClick={() => setfinish(false)}>Currently Reading</div>
            <div className={`card-selector--finished ${finish ? "green-filter" : "grey-filter"}`} onClick={() => setfinish(true)}> Finished</div>
        </div>
    )
}

export default CardSelector