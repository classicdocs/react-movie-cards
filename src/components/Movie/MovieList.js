import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies, deleteMovie, rateMovie) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} rateMovie={rateMovie}/>
    ))}
  </div>
);

const MovieList = ({ movies, deleteMovie, rateMovie }) => <div>{getMovies(movies, deleteMovie, rateMovie)}</div>;

MovieList.defaultProps = {
  movies: [],
  deleteMovie: null,
  rateMovie: null
};

MovieList.propTypes = {
  movies: PropTypes.array,
  deleteMovie: PropTypes.func,
  rateMovie: PropTypes.func
};

export default MovieList;
