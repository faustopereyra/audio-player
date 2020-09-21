import React from "react"

import Card from "../card/card.component.jsx"

import userBooks from "../../books.json"

const CardGrid = () => {
    return (
        <div className="card-grid" >
            {userBooks ? userBooks.map((book) => (
                !book.finished ?
                    <Card book={book} key={book.id} /> : ""
            )) : ""}
        </div>
    )
}

export default CardGrid

/*

{userBooks.map(() => {
                return <h1> hola </h1>
            })}


{userBooks ? userBooks.map(book => (
                <Card key={book.Id} book={book} />
            )) : ""}
*/