import { useState, useEffect, useContext } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  //   const location = "Seattle, WA";
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);
  const [theme] = useContext(ThemeContext);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();
    setPets(json.pets);
  }
  //Hooks are called in the order they were created
  //do not ever use conditional hooks because it will then have a variable amount of hooks being called
  //and so a hook that comes after the conditional hook may be assigned the wrong thing
  //basically dont use hooks in if statements or for-loops
  // if (true) {
  //   const [place, setPlace] = useState("");
  // }

  //   console.log(location);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="search-params">
      {/* //controlled form where react monitors each change */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((thisBreed) => (
              <option key={thisBreed} value={thisBreed}>
                {thisBreed}
              </option>
            ))}
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>

      <Results pets={pets} />

      {/* Uncontrolled form where the input is used only ion submit */}
      {/* <form onSubmit={()}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form> */}
      {/* {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))} */}
    </div>
  );
};

export default SearchParams;
