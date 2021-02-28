export const SortingTypes = {
  POPULAR: `Popular`,
  PRICE_LOW: `Price: low to high`,
  PRICE_HIGH: `Price: high to low`,
  RATING: `Top rated first`
};

export const CityNames = {
  PARIS: `Paris`,
  COLOGONE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const Coordinates = {
  [CityNames.PARIS]: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  [CityNames.COLOGNE]: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  },
  [CityNames.BRUSSELS]: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  },
  [CityNames.AMSTERDAM]: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
  [CityNames.HAMBURG]: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  },
  [CityNames.DUSSELDORF]: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  }
};

export const CardTypes = {
  MAIN: `MAIN`,
  FAVORITE: `FAVORITE`
};
