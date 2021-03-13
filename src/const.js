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

export const Coordinates = {
  [CityName.PARIS]: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  [CityName.COLOGNE]: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  },
  [CityName.BRUSSELS]: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  },
  [CityName.AMSTERDAM]: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
  [CityName.HAMBURG]: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  },
  [CityName.DUSSELDORF]: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  }
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
