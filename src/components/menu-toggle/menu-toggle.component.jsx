import React from "react"

import "./menu-toggle.style.css"

const MenuToggle = ({ theme }) => {
    let color
    if (theme) {

        color = "black"
    } else {
        color = "white"
    }
    return (
        <div className="menu-toggle">
            <img src={require(`../../media/icon/menu-toggle-${color}.png`)} alt="Audio Player" />
        </div>
    )
}

export default MenuToggle 