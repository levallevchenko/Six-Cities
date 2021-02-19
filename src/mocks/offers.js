import {nanoid} from 'nanoid';
import {getRandomInteger, getRandomBoolean, generateRandomArray, getRandomNumber, getElementFromArray, getUniqueArray} from '../utils';
import {OFFER_COUNT, minCountData, maxCountData, hotelNames, cityNames, descriptionArray, avatarNames, goodsArray, userNames, offerTypes, offerLocations, cityLocations} from './data';

const generateImages = () => {
  const images = [];
  for (let i = minCountData.IMAGE_COUNT; i < maxCountData.IMAGE_COUNT; i++) {
    const image = `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/${i}.jpg`;
    images.push(image);
  }

  return images;
};

const imagesArray = generateImages();

export const generateOffer = (index) => {
  const location = offerLocations[index];
  const previewId = getRandomInteger(minCountData.IMAGE_ID, maxCountData.IMAGE_ID);
  const bedrooms = getRandomInteger(minCountData.BEDROOMS_COUNT, maxCountData.BEDROOMS_COUNT);
  const name = getElementFromArray(cityNames);
  const description = generateRandomArray(descriptionArray, minCountData.DESCRIPTION_COUNT, maxCountData.DESCRIPTION_COUNT);
  const goods = generateRandomArray(goodsArray, minCountData.GOODS_COUNT, maxCountData.GOODS_COUNT);
  const avatarUrl = `img/avatar-${getElementFromArray(avatarNames).toLowerCase()}.jpg`;
  const userId = getRandomInteger(minCountData.IMAGE_ID, maxCountData.IMAGE_ID);
  const isUserPro = getRandomBoolean();
  const userName = getElementFromArray(userNames);
  const hotelId = index + nanoid();
  const previewSrc = `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/${previewId}.jpg`;
  const isFavorite = getRandomBoolean();
  const isPremium = getRandomBoolean();
  const hotelImages = getUniqueArray(generateRandomArray(imagesArray, minCountData.IMAGE_COUNT, maxCountData.IMAGE_COUNT));
  const hotelName = getElementFromArray(hotelNames);
  const price = getRandomInteger(minCountData.PRICE_VALUE, maxCountData.PRICE_VALUE);
  const maxAdults = getRandomInteger(minCountData.ADULTS_COUNT, maxCountData.ADULTS_COUNT);
  const rating = getRandomNumber(minCountData.RATING_VALUE, maxCountData.RATING_VALUE).toFixed(1);
  const offerType = getElementFromArray(offerTypes);

  const offer = {
    bedrooms,
    city: {
      location: {
        latitude: cityLocations.amsterdam[0],
        longitude: cityLocations.amsterdam[1],
        zoom: 12
      },
      name
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
    point: {
      latitude: location[0],
      longitude: location[1],
      zoom: 8
    },
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

const generateNearbyOffers = (offers) => {
  const nearbyOffersArray = [];

  offers.forEach((offer) => {
    const nearbyOffers = generateRandomArray(offers, minCountData.NEARBY_PLACES_COUNT, maxCountData.NEARBY_PLACES_COUNT);
    const uniqueNearbyOffers = getUniqueArray(nearbyOffers);

    nearbyOffersArray.push(uniqueNearbyOffers);
    offer.uniqueNearbyOffers = uniqueNearbyOffers;
  });

  return nearbyOffersArray;
};

export const offers = generateOffers();
export const nearbyOffersArray = generateNearbyOffers(offers);
