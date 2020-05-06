
import React from "react";
import ReactDOM from "react-dom";
import SearchParams from './searchParams';

const App = () => {
  return (
    <React.StrictMode>
      <h1>Adopt Me</h1>
      <div>
        <SearchParams />
      </div>
    </React.StrictMode>

  );
};

ReactDOM.render(<App />, document.getElementById("root"));
