import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postComment} from '../../store/api-actions';
import {ReviewLength} from '../../const';
import ReviewStar from './review-star/review-star';

const STARS_COUNT = 5;
const starsDescriptionArray = [`terribly`, `badly`, `not bad`, `good`, `perfect`];

const ReviewForm = () => {
  const {offer, isCommentLoading} = useSelector((state) => state.OFFERS);
  const dispatch = useDispatch();

  const initialState = {
    rating: 0,
    review: ``
  };

  const [userForm, setUserForm] = useState({initialState});

  const reviewLength = userForm.review ? userForm.review.length : 0;
  const isReviewLengthOk = reviewLength >= ReviewLength.MIN && reviewLength <= ReviewLength.MAX;
  const isSubmitNotDisabled = userForm.rating && userForm.review && isReviewLengthOk && !isCommentLoading;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postComment(userForm, offer.hotelId)).then(() => setUserForm({...initialState}));
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setUserForm({...userForm, [name]: value});
  };

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    setUserForm({...userForm, [name]: +value});
  };

  const {review, rating} = userForm;
  const starIds = Array.from(Array(STARS_COUNT).keys()).reverse();

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {starIds.map((id) => <ReviewStar key={id} id = {id} onInputChange = {handleInputChange} rating = {id + 1} title = {starsDescriptionArray[id]} checked = {rating === id + 1} />)}
      </div>
      <textarea onChange={handleFieldChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={review} disabled={isCommentLoading} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit" disabled={!isSubmitNotDisabled}>
          {isCommentLoading ? `Loading..` : `Submit`}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
