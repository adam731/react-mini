import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardGroup, Card } from "react-bootstrap";
import moviesData from "./data/movies.json";

function MovieReviews() {
  const [movieReviews, setMovieReviews] = useState(moviesData);

  return (
    <div className="d-flex">
      <CardGroup>
        {movieReviews.map((movie) => (
          <Card key={movie.id}>
            <Card.Img
              variant="top"
              src={movie.image}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Text>{movie.releaseDate}</Card.Text>
              <Card.Text>{movie.actors.join(", ")}</Card.Text>
              <Card.Text>{movie.rating}/5</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <Link to="/add-review">Add Movie Review</Link>
    </div>
  );
}

export default MovieReviews;
