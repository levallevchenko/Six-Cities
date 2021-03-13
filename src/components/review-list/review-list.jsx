import React from 'react';
import PropTypes from 'prop-types';
import {reviewPropTypes} from '../../prop-types/review';
import Review from '../review/review';

const ReviewList = ({reviews}) => {

  const reviewsCount = reviews.length;

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review key={review.id} review={review} />)}
      </ul>
    </React.Fragment>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes),
};

export default ReviewList;
