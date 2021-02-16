import {nanoid} from 'nanoid';
import {getRandomInteger, getRandomBoolean, generateRandomArray, getRandomNumber, getElementFromArray, generateRandomDate} from '../utils';
import {minCountData, maxCountData, descriptionArray, userNames, avatarNames} from './data';

const DATE_OF_FIRST_REVIEW = `2018, 2, 1`;
const reviewCount = getRandomInteger(minCountData.REVIEW_COUNT, maxCountData.REVIEW_COUNT);

const generateReview = () => {
  const comment = generateRandomArray(descriptionArray, minCountData.DESCRIPTION_COUNT, maxCountData.DESCRIPTION_COUNT);
  const date = generateRandomDate(new Date(DATE_OF_FIRST_REVIEW), new Date());
  const id = nanoid();
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
  const reviews = [];
  for (let i = 0; i < reviewCount; i++) {
    const review = generateReview(i);
    reviews.push(review);
  }

  return reviews;
};

export const reviews = generateReviews();
