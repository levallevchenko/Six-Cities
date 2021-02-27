import {nanoid} from 'nanoid';
import {getRandomInteger, getRandomBoolean, generateRandomArray, getRandomNumber, getElementFromArray, generateRandomDate} from '../utils/common';
import {minCountData, maxCountData, descriptionArray, userNames, avatarNames} from './data';
import {offers} from './offers';

const DATE_OF_FIRST_REVIEW = `2018, 2, 1`;

const generateReview = (index) => {
  const comment = generateRandomArray(descriptionArray, minCountData.DESCRIPTION_COUNT, maxCountData.DESCRIPTION_COUNT);
  const date = generateRandomDate(new Date(DATE_OF_FIRST_REVIEW), new Date());
  const id = index + nanoid();
  const rating = getRandomNumber(minCountData.RATING_VALUE, maxCountData.RATING_VALUE).toFixed(1);
  const avatarUrl = `img/avatar-${getElementFromArray(avatarNames).toLowerCase()}.jpg`;
  const userId = getRandomInteger(minCountData.IMAGE_ID, maxCountData.IMAGE_ID);
  const isPro = getRandomBoolean();
  const name = getElementFromArray(userNames);

  const review = {
    comment,
    date,
    id,
    rating,
    user: {
      avatarUrl,
      userId,
      isPro,
      name
    }
  };

  return review;
};

const generateReviews = () => {
  const reviewCount = getRandomInteger(minCountData.REVIEW_COUNT, maxCountData.REVIEW_COUNT);
  const reviews = [];
  const reviewsArray = [];
  for (let i = 0; i < reviewCount; i++) {
    const review = generateReview(i);
    reviews.push(review);
    for (let j = 0; j < offers.length; j++) {
      reviewsArray.push(reviews);
    }
  }

  return reviewsArray;
};

export const reviews = generateReviews();
