import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {reviewPropTypes} from '../../prop-types/review';
import Review from '../review/review';

const ReviewList = ({reviews}) => {
  const reviewsCount = reviews.length;
  const {error} = useSelector((state) => state.APP);

  return (
    <React.Fragment>
      <h2 className="reviews__title">
        {error
          ? `Oops..It seems that reviews didn't load. Sorry!`
          : <>Reviews · <span className="reviews__amount">{reviewsCount}</span></>}
      </h2>
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
