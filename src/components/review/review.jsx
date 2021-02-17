import React from 'react';
import dayjs from 'dayjs';
import {reviewPropTypes} from '../../prop-types/review';

const Review = (props) => {

  const {review} = props;
  const {user, comment, date, rating} = review;

  const formatDate = dayjs(date).format(`MMMM YYYY`);

  const ratingStarWidth = `${Math.round(rating) * 20}%`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingStarWidth}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="">{formatDate}</time>
      </div>
    </li>
  );
};

Review.propTypes = reviewPropTypes;

export default Review;
