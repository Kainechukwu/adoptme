// import React from "react";
import { StrictMode } from "react";
import Details from "./Details";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
      {/* <div>
        
        
      </div> */}
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
