import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const StarRating = ({ rating, onStarClick }) => {
  const containerStyle = { width: `${cropWidth(rating)}px` };

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            <i className="fa fa-star-o fa-lg" onClick={() => onStarClick(1) } style={styles.star}></i>
            <i className="fa fa-star-o fa-lg" onClick={() => onStarClick(2) } style={styles.star}></i>
            <i className="fa fa-star-o fa-lg" onClick={() => onStarClick(3) }style={styles.star}></i>
            <i className="fa fa-star-o fa-lg" onClick={() => onStarClick(4) }style={styles.star}></i>
            <i className="fa fa-star-o fa-lg" onClick={() => onStarClick(5) }style={styles.star}></i>
          </div>
          <div style={styles.starsInner}>
            <i className="fa fa-star fa-lg" onClick={() => onStarClick(1) }style={styles.star}></i>
            <i className="fa fa-star fa-lg" onClick={() => onStarClick(2) }style={styles.star}></i>
            <i className="fa fa-star fa-lg" onClick={() => onStarClick(3) }style={styles.star}></i>
            <i className="fa fa-star fa-lg" onClick={() => onStarClick(4) }style={styles.star}></i>
            <i className="fa fa-star fa-lg" onClick={() => onStarClick(5) }style={styles.star}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
  onStarClick: null
};

StarRating.propTypes = {
  rating: PropTypes.number,
  onStarClick: PropTypes.func
};

export default StarRating;
