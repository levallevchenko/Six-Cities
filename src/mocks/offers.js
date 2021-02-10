import {getRandomInteger, getRandomBoolean, generateRandomArray, getRandomNumber, getElementFromArray} from '../utils';

const OFFER_COUNT = 8;
const IMAGE_MIN_ID = 1;
const IMAGE_MAX_ID = 3;
const BEDROOMS_MIN_COUNT = 1;
const BEDROOMS_MAX_COUNT = 7;
const DESCRIPTION_MIN_COUNT = 1;
const DESCRIPTION_MAX_COUNT = 9;
const GOODS_MIN_COUNT = 2;
const GOODS_MAX_COUNT = 10;
const ADULTS_MIN_COUNT = 1;
const ADULTS_MAX_COUNT = 8;
const RATING_MIN_VALUE = 1;
const RATING_MAX_VALUE = 5;
const PRICE_MIN_VALUE = 50;
const PRICE_MAX_VALUE = 1000;
const AVATAR_MIN_ID = 1;
const AVATAR_MAX_ID = 2;



const hotelNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `The Joshua Tree`,
  `The Pondhouse - A Magical`
];

const descriptionString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const descriptionArray = descriptionString.split(`. `);

const goodsArray = [
  `Wi-Fi`,
  `Washing machine`,
  `Towels`,
  `Heating`,
  `Coffee machine`,
  `Baby seat`,
  `Kitchen`,
  `Dishwasher`,
  `Cabel TV`,
  `Fridge`
]

const userNames = [
  `Angelina`,
  `Max`,
  `Mat`,
  `Andy`,
  `Alex`,
  `Sandra`,
  `Denis`,
  `Jack`,
  `James`
]

const offerTypes = [
  `room`,
  `hotel`,
  `house`,
  `apartment`
]

export const generateOffer = (index) => {
  const bedrooms = getRandomInteger(BEDROOMS_MIN_COUNT, BEDROOMS_MAX_COUNT);
  const description = generateRandomArray(descriptionArray, DESCRIPTION_MIN_COUNT, DESCRIPTION_MAX_COUNT);
  const goods = generateRandomArray(goodsArray, GOODS_MIN_COUNT, GOODS_MAX_COUNT);
  const avatarUrl = `img/${getRandomInteger(AVATAR_MIN_ID, AVATAR_MAX_ID)}.png`;
  const userID = getRandomInteger(IMAGE_MIN_ID, IMAGE_MAX_ID);;
  const isUserPro = getRandomBoolean();
  const userName = getElementFromArray(userNames);
  const hotelId = getRandomInteger(IMAGE_MIN_ID, IMAGE_MAX_ID);
  const previewSrc = `img/apartment-0${hotelId}.jpg`;
  const isFavorite = getRandomBoolean();
  const isPremium = getRandomBoolean();
  const hotelImages = previewSrc;
  const hotelName = hotelNames[index];
  const price = getRandomInteger(PRICE_MIN_VALUE, PRICE_MAX_VALUE);
  const maxAdults = getRandomInteger(ADULTS_MIN_COUNT, ADULTS_MAX_COUNT);
  const rating = getRandomNumber(RATING_MIN_VALUE, RATING_MAX_VALUE).toFixed(1);
  const offerType = getElementFromArray(offerTypes);

  const offer = {
    bedrooms,
    description,
    goods,
    host: {
      avatarUrl,
      userID,
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
  }

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
