import React, { useState } from 'react';

import Library from "./layouts/library/library.component"
import Book from "./layouts/book/book.component.jsx"

import DarkModeToggle from "./components/dark-mode-toggle/dark-mode-toggle.component"

import userBooks from "./books.json"

import './App.css';

function App() {

  const [theme, setTheme] = useState(false) // true = light || false = dark
  const [book, setBook] = useState(false)

  return (
    <div className="App">
      <DarkModeToggle setTheme={setTheme} />
      {book ? <Book theme={theme} book={userBooks[book - 1]} setBook={setBook} /> : <Library setBook={setBook} />}


    </div>
  );
}

export default App;

//<Book theme={theme} />