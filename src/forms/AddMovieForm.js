import React from 'react'
import PropTypes from 'prop-types';

export default function AddMovieForm({onChange, onSubmit}) {
  return (
    <form id="add-movie-form" onSubmit={onSubmit}>
      <div className="col-md-6 mb-3">
        <label htmlFor="movie-title">Title:</label>
        <input type="text" className="form-control" id="movie-title" name="title" required onChange={onChange}></input>

        <label htmlFor="movie-subtitle">Subtitle:</label>
        <input type="text" className="form-control" id="movie-subtitle" name="subtitle" required onChange={onChange}></input>

        <label htmlFor="movie-description">Description:</label>
        <input type="text" className="form-control" id="movie-description" name="description" required onChange={onChange}></input>

        <label htmlFor="movie-url">URL:</label>
        <input type="text" className="form-control" id="movie-url" name="imageUrl" required onChange={onChange}></input>

        <input type="submit" value="Submit"></input>
      </div>
    </form>
  )
}

AddMovieForm.defaultProps = {
  onChange: null,
  onSubmit: null
}

AddMovieForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}