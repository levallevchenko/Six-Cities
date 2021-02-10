import {getRandomInteger, getRandomBoolean} from '../utils';

const OFFER_COUNT = 5;
const IMAGE_MIN_ID = 1;
const IMAGE_MAX_ID = 3;

const hotelNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `The Joshua Tree`,
  `The Pondhouse - A Magical`
];


export const generateOffer = (index) => {
  const imageId = getRandomInteger(IMAGE_MIN_ID, IMAGE_MAX_ID);
  const imageSrc = `img/apartment-0${imageId}.jpg`;
  const hotelName = hotelNames[index];
  const isPremium = getRandomBoolean();
  const price = getRandomInteger(50, 1000);

  return {
    imageSrc,
    hotelName,
    isPremium,
    price
  };
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
