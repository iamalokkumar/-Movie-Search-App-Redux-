import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = () => {
  const { data, loading, error } = useSelector((state) => state.movies);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data.length) return <p>No results found.</p>;

  return (
    <div className="movie-list">
      {data.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
