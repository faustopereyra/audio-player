import React, { useState } from 'react';

//import Library from "./layouts/library/library.component"
import Book from "./layouts/book/book.component.jsx"

import DarkModeToggle from "./components/dark-mode-toggle/dark-mode-toggle.component"

import './App.css';

function App() {

  const [theme, setTheme] = useState(false) // true = light || false = dark

  return (
    <div className="App">
      <DarkModeToggle setTheme={setTheme} />
      <Book theme={theme} />
    </div>
  );
}

export default App;

//<Library />