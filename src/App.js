// import React from "react";
import { StrictMode, useState } from "react";
import ThemeContext from "./ThemeContext";
import Details from "./Details";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  const theme = useState("brown");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
      {/* <div>
        
        
      </div> */}
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
