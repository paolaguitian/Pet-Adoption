
import React from "react";
import ReactDOM from "react-dom";
import { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown';

const App = () => {
  console.log(ANIMALS)
  const [AnimalDropdown, animal] = useDropdown("Animal", "dog", ANIMALS);
  const [BreedDropdown, breed] = useDropdown("Breed", "", ANIMALS);
  return (
    <div>
      <h1>
        Adopt Me
      </h1>
      <AnimalDropdown />
      <BreedDropdown />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
