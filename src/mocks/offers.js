import {getRandomInteger, getRandomBoolean, generateRandomArray, getRandomNumber, getElementFromArray} from '../utils';
import {OFFER_COUNT, minCountData, maxCountData, hotelNames, cityNames, descriptionArray, avatarNames, goodsArray, userNames, offerTypes} from './data';

export const generateOffer = (index) => {
  const previewId = getRandomInteger(minCountData.IMAGE_ID, maxCountData.IMAGE_ID);
  const bedrooms = getRandomInteger(minCountData.BEDROOMS_COUNT, maxCountData.BEDROOMS_COUNT);
  const name = getElementFromArray(cityNames);
  const description = generateRandomArray(descriptionArray, minCountData.DESCRIPTION_COUNT, maxCountData.DESCRIPTION_COUNT);
  const goods = generateRandomArray(goodsArray, minCountData.GOODS_COUNT, maxCountData.GOODS_COUNT);
  const avatarUrl = `img/avatar-${getElementFromArray(avatarNames).toLowerCase()}.jpg`;
  const userId = getRandomInteger(minCountData.IMAGE_ID, maxCountData.IMAGE_ID);
  const isUserPro = getRandomBoolean();
  const userName = getElementFromArray(userNames);
  const hotelId = index;
  const previewSrc = `img/apartment-0${previewId}.jpg`;
  const isFavorite = getRandomBoolean();
  const isPremium = getRandomBoolean();
  const hotelImages = previewSrc;
  const hotelName = getElementFromArray(hotelNames);
  const price = getRandomInteger(minCountData.PRICE_VALUE, maxCountData.PRICE_VALUE);
  const maxAdults = getRandomInteger(minCountData.ADULTS_COUNT, maxCountData.ADULTS_COUNT);
  const rating = getRandomNumber(minCountData.RATING_VALUE, maxCountData.RATING_VALUE).toFixed(1);
  const offerType = getElementFromArray(offerTypes);

  const offer = {
    bedrooms,
    city: {
      name,
    },
    description,
    goods,
    host: {
      avatarUrl,
      userId,
      isUserPro,
      userName,
    },
    hotelId,
    previewSrc,
    isFavorite,
    isPremium,
    hotelImages,
    price,
    maxAdults,
    rating,
    hotelName,
    offerType
  };

  return offer;
};

const generateOffers = () => {
  const offers = [];
  for (let i = 0; i < OFFER_COUNT; i++) {
    const offer = generateOffer(i);
    offers.push(offer);
  }

  return offers;
};

export const offers = generateOffers();
