import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieReviews from "./MovieReviews.js";
import AddMovieReview from "./AddMovieReview.js";
import NavBar from "./NavBar.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    fetch("/api/movieReviews")
      .then((res) => res.json())
      .then(setMovieReviews)
      .catch((err) => console.log(err));
  }, []);

  if (movieReviews == null) {
    return <h1>Error</h1>;
  }
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<MovieReviews movies={movieReviews} />}
        />
        <Route
          path="/add-review"
          element={<AddMovieReview movies={movieReviews} />}
        />
      </Routes>
    </Router>
  );
}

export default App;