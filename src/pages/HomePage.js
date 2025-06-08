import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const HomePage = () => {
  return (
    <div>
      <h1>🎬 Movie Search App</h1>
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default HomePage;
