import React from "react"

import "./audio-player-media.style.css"

const AudioPlayerMedia = ({ book }) => {
    return (
        <div>
            <div className="img-container"><img src={require(`../../media/book-art/${book.imageUrl}`)} alt="flow" /></div>
            <h3 className="audio-title" id="title">{book.title} </h3>
            <h4 className="audio-author">{book.author} </h4>
            <audio src="../../media/book-in-blinks/flow.mp3"></audio>
        </div>
    )
}

export default AudioPlayerMedia
