import React, {useState} from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

const RatingView = {
  RATING: "rating",
  VOTES: "votes"
}

const formatRating = rating => {
  return Math.round(rating * 10) / 10;
}

const formatVotes = votes => {
  return `${votes !== undefined ? votes : 1} ${votes > 1 || votes === 0 ? "votes" : "vote"}`;
}


const MovieCard = ({ movie, deleteMovie, rateMovie }) => {

  const [ratingView, setRatingView] = useState(RatingView.RATING);

  return (
    <div className="movie-card">
      <div className="movie-card card">
        <img className="card-img-top" src={movie.imageUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
          <p className="text-justify" style={{ fontSize: '14px' }}>
            {movie.description}
          </p>
          {movie.manualAdded &&
            <div>
              <button type="button" onClick={() => deleteMovie(movie.id)}>Delete</button>
            </div>}
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="float-left mt-1">
              <StarRating rating={movie.rating} onStarClick={mark => rateMovie(movie.id, mark)} />
            </div>
            <div className="card-footer-badge float-right badge badge-primary badge-pill"
            onMouseEnter={() => setRatingView(RatingView.VOTES)}
            onMouseLeave={() => setRatingView(RatingView.RATING)}
            >
              {ratingView === RatingView.RATING && formatRating(movie.rating)}
              {ratingView === RatingView.VOTES && formatVotes(movie.votes)}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};

MovieCard.defaultProps = {
  movie: {},
  deleteMovie: null,
  rateMovie: null
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  deleteMovie: PropTypes.func,
  rateMovie: PropTypes.func
};

export default MovieCard;
