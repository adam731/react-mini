import React from "react";
import { Link } from "react-router-dom";
import { CardGroup, Card, Button } from "react-bootstrap";

function MovieReviews(props) {

  const removeMovie = (movie) => {
    const index = props.movies.indexOf(movie);
    delete props.movies[index];
    document.getElementById(movie.id).remove();
  };

  return (
    <div className="d-flex">
      <CardGroup>
        {props.movies.map((movie) => (
          <Card key={movie.id} id={movie.id}>
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
              <Button onClick={() => removeMovie(movie)}>Remove</Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <Link to="/add-review">Add Movie Review</Link>
    </div>
  );
}

export default MovieReviews;
