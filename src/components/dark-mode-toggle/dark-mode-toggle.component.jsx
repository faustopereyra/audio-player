import React from "react"

import "./dark-mode-toggle.style.css"

const DarkModeToggle = ({ setTheme }) => {
    const toggleDarkMode = (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute("data-theme", "dark")
            setTheme(true)
        } else {
            document.documentElement.setAttribute("data-theme", "light")
            setTheme(false)
        }
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