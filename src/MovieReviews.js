import React from "react";
import { Link } from "react-router-dom";
import { CardGroup, Card, Button } from "react-bootstrap";

function MovieReviews(props) {

    const removeMovie = (movie) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: movie._id,
        }),
      };
      fetch("/deleteReview", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      const indexOfMovie = props.movies.indexOf(movie);
      delete props.movies[indexOfMovie];
      document.getElementById(movie._id).remove();
    };

  return (
    <div className="d-flex">
      <CardGroup>
        {props.movies.map((movie) => (
          <Card key={movie._id} id={movie._id}>
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
