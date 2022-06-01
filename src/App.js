// import React from "react";
import { StrictMode, useState, lazy, Suspense } from "react";
import ThemeContext from "./ThemeContext";
// import Details from "./Details";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";
// import SearchParams from "./SearchParams";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("brown");
  return (
    <StrictMode>
      <Suspense
        fallback={
          <h2 className="mx-auto animate-pulse">
            This module is still loading...
          </h2>
        }
      >
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
      </Suspense>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
