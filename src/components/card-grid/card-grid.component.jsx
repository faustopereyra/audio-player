import React from "react"

import Card from "../card/card.component.jsx"

const CardGrid = ({ userBooks }) => {
    <div className="card-grid" >
        {userBooks ? filteredBooks().map(book => (
            <Card key={book.Id} book={book} />
        )) : ""}
    </div>
}

export default CardGrid