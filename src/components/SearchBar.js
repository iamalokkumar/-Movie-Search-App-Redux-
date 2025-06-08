import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../features/movies/MovieSlice';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(fetchMovies(search));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        placeholder="Search movies..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
