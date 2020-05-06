import React, { useEffect, useState } from "react";
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [breeds, updateBreeds] = useState([])
  const [AnimalDropdown, animal] = useDropdown("Animal", "dog", ANIMALS);
  const [BreedDropdown, breed, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    updateBreeds([]);
    setBreed("");

    //apuBreeds:{breeds: [{name,link}, {}]}
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedString = apiBreeds.map(({ name }) => name);
      updateBreeds(breedString);
    }, console.error)
  }, [animal, updateBreeds, setBreed])

  return (
    <div>
      <AnimalDropdown />
      <BreedDropdown />
    </div>
  );
};

export default SearchParams


