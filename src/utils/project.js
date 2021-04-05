import {SortingType} from '../const';

export const getUniqueArray = (array) => {
  const arraySet = new Set(array);
  const uniqueArray = Array.from(arraySet);
  return uniqueArray;
};

export const getCityOffers = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const sortOffers = (offers, sortingType) => {
  switch (sortingType) {
    case SortingType.PRICE_LOW:
      return [...offers].sort((previousOffer, currentOffer) => (previousOffer.price - currentOffer.price));
    case SortingType.PRICE_HIGH:
      return [...offers].sort((previousOffer, currentOffer) => (currentOffer.price - previousOffer.price));
    case SortingType.RATING:
      return [...offers].sort((previousOffer, currentOffer) => (currentOffer.rating - previousOffer.rating));
    default:
      return [...offers];
  }
};

export const sortReviews = (reviews) =>
  [...reviews].sort((previousReview, currentReview) => {
    const previousReviewDate = new Date(previousReview.date);
    const currentReviewDate = new Date(currentReview.date);
    return (currentReviewDate - previousReviewDate);
  });
