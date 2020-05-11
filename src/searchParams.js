import React, { useEffect, useState } from "react";
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown';
import Results from "./Results";

const SearchParams = () => {
  const [breeds, updateBreeds] = useState([])
  const [AnimalDropdown, animal] = useDropdown("Animal", "dog", ANIMALS);
  const [BreedDropdown, breed, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);


  async function requestPets() {
    //{animals, pagination}
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    console.log("animals", animals);

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
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams


