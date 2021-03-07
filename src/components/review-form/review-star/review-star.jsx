import React from 'react';
import {reviewStarPropTypes} from '../../../prop-types/review';

const ReviewStar = (props) => {
  const {id, onInputChange, rating, title, checked} = props;

  return (
    <React.Fragment>
      <input onChange={onInputChange} className="form__rating-input visually-hidden" name="rating" value={rating} id={id} type="radio" checked={checked} />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </React.Fragment>
  );
};

ReviewStar.propTypes = reviewStarPropTypes.isRequired;

export default ReviewStar;
