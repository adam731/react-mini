import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieReviews from "./MovieReviews";
import AddMovieReview from "./AddMovieReview";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MovieReviews/>} />
        <Route path="/add-review" element={<AddMovieReview/>} />
      </Routes>
    </Router>
  );
}

export default App;
