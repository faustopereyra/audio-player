import React from "react"

import CardSelector from "../../components/card-selector/card-selector.component.jsx"
import CardGrid from "../../components/card-grid/card-grid.component.jsx"
import DarkModeToggle from "../../components/dark-mode-toggle/dark-mode-toggle.component.jsx"

import "./library.style.css"

const Library = () => {
    return (
        <div className="library">
            <h1>Library</h1>

            <CardSelector />
            <CardGrid />
        </div>
    )
}

export default Library