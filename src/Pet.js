// import React from "react";
import { Link } from "react-router-dom";

// import { render } from "react-dom";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { key: 1 }, props.name),
//     React.createElement("h2", { key: 2 }, props.animal),
//     React.createElement("h2", { key: 3 }, props.breed),
//   ]);
// };

const Pet = ({ name, animal, breed, images, location, id }) => {
  //const {name, animal, breed, images, location, id} = props
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
