import React from 'react';
import {useState} from 'react';
import ReviewStar from './review-star/review-star';

const STARS_COUNT = 5;

const ReviewForm = () => {

  const [userForm, setUserForm] = useState({
    rating: 0,
    review: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setUserForm({...userForm, [name]: value});
  };

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    evt.target.classList.toggle(`checked`);
    setUserForm({...userForm, [name]: value});
  };

  const {review, rating} = userForm;
  const starIds = Array.from(Array(STARS_COUNT).keys()).reverse();

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {starIds.map((id) => <ReviewStar key={id} id = {id} handleInputChange = {handleInputChange} rating = {id + 1} />)}
      </div>
      <textarea onChange={handleFieldChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={review} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
      <h2>Check State:</h2>
      <h4>Comment: {review}</h4>
      <h4>Rating: {rating}</h4>
    </form>
  );
};

export default ReviewForm;
