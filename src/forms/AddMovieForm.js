import React from 'react'
import PropTypes from 'prop-types';
import InputErrorMessage from '../components/InputErrorMessage';

export default function AddMovieForm({onChange, onSubmit, errors}) {
  return (
    <form id="add-movie-form" onSubmit={onSubmit}>
      <div className="col-md-6 mb-3">
        <label htmlFor="movie-title">Title:</label>
        <input type="text" className="form-control" id="movie-title" name="title" onChange={onChange}></input>
        {errors.title && <InputErrorMessage message={errors.title}></InputErrorMessage>}

        <label htmlFor="movie-subtitle">Subtitle:</label>
        <input type="text" className="form-control" id="movie-subtitle" name="subtitle"  onChange={onChange}></input>
        {errors.subtitle && <InputErrorMessage message={errors.subtitle}></InputErrorMessage>}

        <label htmlFor="movie-description">Description:</label>
        <input type="text" className="form-control" id="movie-description" name="description"  onChange={onChange}></input>
        {errors.description && <InputErrorMessage message={errors.description}></InputErrorMessage>}

        <label htmlFor="movie-url">URL:</label>
        <input type="text" className="form-control" id="movie-url" name="imageUrl"  onChange={onChange}></input>
        {errors.imageUrl && <InputErrorMessage message={errors.imageUrl}></InputErrorMessage>}

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