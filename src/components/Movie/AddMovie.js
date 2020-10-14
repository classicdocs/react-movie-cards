import React, { Component } from 'react'
import AddMovieForm from '../../forms/AddMovieForm'
import PropTypes from 'prop-types';

export default class AddMovie extends Component {

  state = {
    title: "",
    subtitle: "",
    description: "",
    imageUrl: "",
    errors: {}
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {}
    });
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.isFormValid()) {
      return;
    }

    let movie = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      description: this.state.description,
      imageUrl: this.state.imageUrl
    }

    this.props.addNewMovie(movie);
  }

  isFormValid() {
    let errors = {};

    if (this.state.title === "") {
      errors["title"] = "Title is required";
    }
    if (this.state.subtitle === "") {
      errors["subtitle"] = "Subtitle is required";
    }
    if (this.state.description === "") {
      errors["description"] = "Description is required";
    }
    if (this.state.imageUrl === "") {
      errors["imageUrl"] = "Image url is required";
    }

    if (Object.keys(errors).length === 0) {
      return true;
    }

    this.setState({errors});
    return false;

  }

  render() {
    return (
      <div>
        <h2>Add new movie</h2>
        <AddMovieForm 
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          errors={this.state.errors}
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