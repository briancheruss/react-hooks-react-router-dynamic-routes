import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const { movieId } = useParams();
  const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId));

  return (
    <div>
      <h3>Movie Details:</h3>
      <p>Title: {selectedMovie.title}</p>
    </div>
  );
}

export default MovieShow;
