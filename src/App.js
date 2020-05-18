import React, { useState, lazy, } from "react";
import { Router, Link } from "@reach/router";
import Search from "./search";
import Details from './Details';
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState('darkblue');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <Search path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode >
  );
};

export default App;
