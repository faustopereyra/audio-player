import React from "react"

import "./dark-mode-toggle.style.css"

const DarkModeToggle = () => {
    const toggleDarkMode = (e) => {
        e.target.checked ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light")
    }
    return (
        <div className="toggle">
            <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} ></input>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default DarkModeToggle