import React, { Component } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import AddMovie from './AddMovie';

const ViewState = {
  VIEW: "view",
  ADD: "add"
}

export default class Movies extends Component {
  state = {
    movies: [],
    viewState: ViewState.VIEW
  };

  constructor(props) {
    super(props);

    this.addNewMovie = this.addNewMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.rateMovie = this.rateMovie.bind(this);
  }

  componentDidMount() {
    this.setState(() => ({
      movies: MovieService.getMovies(),
    }));
  }

  changeViewState(viewState) {
    this.setState({viewState});
  }

  addNewMovie(movie) {
    movie.id = this.generateMovieId();
    movie.rating = 0;
    movie.votes = 0;

    movie.manualAdded = true;
    this.state.movies.push(movie);
    this.changeViewState(ViewState.VIEW);
  }

  deleteMovie(movieId) {
    if (!confirm("Are you sure you want to delete a movie?")) {
      return;
    }

    const movies = this.state.movies.filter(movie => movie.id != movieId);
    this.setState({movies});
  }

  rateMovie(movieId, mark) {

    const movies = this.state.movies.map(movie => movie.id != movieId ? movie : this.recalculateRate(movie, mark));
    this.setState(movies);
  }

  recalculateRate(movie, mark) {

    let {rating} = movie;

    let votes = movie.votes !== undefined ? movie.votes : 1;

    const newRating = rating * votes + mark;

    votes++;

    movie.votes = votes;
    movie.rating = newRating / votes;

    return movie;
  }

  generateMovieId() {
    return (this.state.movies.length + 1) * 100;
  }

  render() {

    const viewState = this.state.viewState;

    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            {viewState === ViewState.VIEW && 
              <div>
                <button type="button" className="btn btn-success" onClick={() => this.changeViewState(ViewState.ADD)}>Add new movie</button>
                <MovieList movies={this.state.movies} deleteMovie={this.deleteMovie} rateMovie={this.rateMovie}/>
              </div>
            }
            {viewState === ViewState.ADD && 
              <div>
                <button type="button" className="btn btn-primary" onClick={() => this.changeViewState(ViewState.VIEW)}>View all movies</button>
                <AddMovie addNewMovie={this.addNewMovie}></AddMovie>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
