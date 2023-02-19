import React from "react";

function AddMovieReview() {
    return (
      <div>
        <h2>Add Movie Review</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
  
          <label htmlFor="release-date">Release Date</label>
          <input type="date" id="release-date" name="release-date" required />
  
          <label htmlFor="actors">Actors</label>
          <input type="text" id="actors" name="actors" required />
  
          <label htmlFor="image">Image URL</label>
          <input type="url" id="image" name="image" required />
  
          <label htmlFor="rating">Rating (out of 5)</label>
          <input type="number" id="rating" name="rating" min="1" max="5" required />
  
          <button type="submit">Add Review</button>
        </form>
      </div>
    );
  }
  
  export default AddMovieReview;
  