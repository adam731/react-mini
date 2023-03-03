import React, { useState } from "react";

function AddMovieReview(props) {
  const [name, setName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [actors, setActors] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: props.movies.length + 1,
        name: name,
        releaseDate: releaseDate,
        actors: actors.split(","),
        image: image,
        rating: rating,
      }),
    };
    fetch("/AddMovieReview", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Add Movie Review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <form
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="release-date">Release Date</label>
        <input
          type="date"
          id="release-date"
          name="release-date"
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
          required
        />

        <label htmlFor="actors">Actors</label>
        <input
          type="text"
          id="actors"
          name="actors"
          value={actors}
          onChange={(event) => setActors(event.target.value)}
          required
        />

        <label htmlFor="image">Image URL</label>
        <input
          type="file"
          id="image"
          name="image"
          //value={image}
          onChange={(event) => setImage(event.target.value)}
          required
        />

        <label htmlFor="rating">Rating (out of 5)</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          required
        />

        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default AddMovieReview;
