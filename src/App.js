import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   //create element creates an instance of an element e.g a div or a h1 or App
//   return React.createElement("div", {}, [
//     React.createElement(
//       "h1",
//       { id: "brand", className: "petPage ambassador" },
//       "Adopt me please"
//     ),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Thanos",
//       animal: "Dog",
//       breed: "CarneCorso",
//     }),
//     React.createElement(Pet, {
//       name: "Odin",
//       animal: "Dog",
//       breed: "Bull-dog",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />

      <Pet name="Thanos" animal="Dog" breed="CarneCorso" />

      <Pet name="Odin" animal="Dog" breed="Bull-dog" />
    </div>
  );
};

// const myRenderedApp = React.createElement(App);

// render(myRenderedApp, document.getElementById("root"));

render(<App />, document.getElementById("root"));
