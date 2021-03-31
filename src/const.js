export const MAX_REVIEW_COUNT = 10;

export const ReviewLength = {
  MIN: 50,
  MAX: 300,
};

export const SortingType = {
  POPULAR: `Popular`,
  PRICE_LOW: `Price: low to high`,
  PRICE_HIGH: `Price: high to low`,
  RATING: `Top rated first`,
};

export const CityName = {
  PARIS: `Paris`,
  COLOGONE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`,
};

export const CardType = {
  MAIN: `MAIN`,
  FAVORITE: `FAVORITE`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id`,
};

export const APIRoute = {
  OFFERS: `/hotels`,
  FAVORITES: `/favorite`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
};

export const ErrorMessageType = {
  NETWORK_ERROR: `Network unavailable`,
  BAD_REQUEST: `Invalid data format`,
};

export const FavoriteStatus = {
  REMOVE: `0`,
  ADD: `1`
};

export const REG = /^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/;
