import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=7837c815&i=${id}`)
      .then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
    </div>
  );
};

export default MoviePage;
