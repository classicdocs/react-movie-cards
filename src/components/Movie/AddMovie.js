import React, { Component } from 'react'
import AddMovieForm from '../../forms/AddMovieForm'
import PropTypes from 'prop-types';

export default class AddMovie extends Component {

  state = {
    title: "",
    subtitle: "",
    description: "",
    imageUrl: ""
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    let movie = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      description: this.state.description,
      imageUrl: this.state.imageUrl
    }

    this.props.addNewMovie(movie);
  }

  render() {
    return (
      <div>
        <h2>Add new movie</h2>
        <AddMovieForm 
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        ></AddMovieForm>
      </div>
    )
  }
}

AddMovie.defaultProps = {
  addNewMovie: null
}

AddMovie.propTypes = {
  addNewMovie: PropTypes.func,
}