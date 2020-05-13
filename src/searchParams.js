import React, { useEffect, useState, useContext } from "react";
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown';
import Results from "./Results";
import ThemeContext from './ThemeContext';

const SearchParams = () => {
  const [breeds, updateBreeds] = useState([])
  const [AnimalDropdown, animal] = useDropdown("Animal", "dog", ANIMALS);
  const [BreedDropdown, breed, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);


  async function requestPets() {
    //{animals, pagination}
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreed("");

    //apiBreeds:{breeds: [{name,link}, {}]}
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedString = apiBreeds.map(({ name }) => name);
      updateBreeds(breedString);
    }, console.error)
  }, [animal, updateBreeds, setBreed])


  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <AnimalDropdown />
        <BreedDropdown />
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams


