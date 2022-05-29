import Pet from "./Pet";

const results = ({ pets }) => {
  //deconstructing pets from params is the same as saying:
  //const pets = params.pets
  return (
    <div>
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animel={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
      ;
    </div>
  );
};

export default results;
