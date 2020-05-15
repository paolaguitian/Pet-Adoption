import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Search from "./search";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState('darkblue');
  const Details = lazy(() => import('./Details'));

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Suspense fallback={<h1>loading route...</h1>}>
            <Router>
              <Search path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>

        </div>
      </ThemeContext.Provider>
    </React.StrictMode >
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
