
import React from 'react';
import {reviewStarPropTypes} from '../../../prop-types/review';

const ReviewStar = (props) => {
  const {id, handleInputChange, rating} = props;

  return (
    <React.Fragment>
      <input onChange={handleInputChange} className="form__rating-input visually-hidden" name="rating" value={rating} id={id} type="radio" />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </React.Fragment>
  );
};

ReviewStar.propTypes = reviewStarPropTypes;

export default ReviewStar;
