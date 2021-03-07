export const OFFER_COUNT = 15;

export const minCountData = {
  IMAGE_ID: 1,
  IMAGE_COUNT: 1,
  BEDROOMS_COUNT: 1,
  DESCRIPTION_COUNT: 1,
  GOODS_COUNT: 2,
  ADULTS_COUNT: 1,
  RATING_VALUE: 1,
  PRICE_VALUE: 50,
  REVIEW_COUNT: 1,
  NEARBY_PLACES_COUNT: 1
};

export const maxCountData = {
  IMAGE_ID: 20,
  IMAGE_COUNT: 6,
  BEDROOMS_COUNT: 7,
  DESCRIPTION_COUNT: 9,
  GOODS_COUNT: 10,
  ADULTS_COUNT: 8,
  RATING_VALUE: 5,
  PRICE_VALUE: 1000,
  REVIEW_COUNT: 6,
  NEARBY_PLACES_COUNT: 6
};

export const hotelNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `The Joshua Tree`,
  `The Pondhouse - A Magical`,
  `Waterfront with extraordinary view`,
  `House in countryside`
];

export const CityName = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

export const descriptionString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

export const descriptionArray = descriptionString.split(`. `);

export const goodsArray = [
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
];

export const userNames = [
  `Angelina`,
  `Max`,
  `Mat`,
  `Andy`,
  `Alex`,
  `Sandra`,
  `Denis`,
  `Jack`,
  `James`
];

export const avatarNames = [
  `Angelina`,
  `Max`,
];

export const offerTypes = [
  `room`,
  `hotel`,
  `house`,
  `apartment`
];

export const offerLocations = {
  Paris: [
    [48.858610000000006, 2.330499],
    [48.85661, 2.351499],
    [48.83861, 2.35049],
    [48.87561, 2.375499],
    [48.855431661, 2.352131499],
    [48.865423431661, 2.362131499],
    [48.84325431661, 2.3252131499],
  ],
  Cologne: [
    [50.91126361, 6.94344974],
    [50.9716361, 6.94444974],
    [50.9246361, 6.967944974],
    [50.9240436361, 6.91344974],
    [50.921312631, 6.932344974],
    [50.91124126361, 6.943441241974],
  ],
  Brussels: [
    [50.869557, 4.332697],
    [50.867557, 4.371696999999999],
    [50.842557, 4.363696999999999],
    [50.852557, 4.3376969999999995],
    [50.872557, 4.3876969999234],
    [50.861557, 4.3776999995]
  ],
  Amsterdam: [
    [52.3909553943508, 4.85309666406198],
    [52.369553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198],
    [52.3943429553943508, 4.9569309666406234],
    [52.3832095539, 4.9234309666406198],
  ],
  Hamburg: [
    [53.529341, 9.975654],
    [53.550341, 10.000654],
    [53.573341000000006, 10.025654000000001],
    [53.540341000000005, 10.025654000000001],
    [53.56923, 9.999999],
    [53.529341, 10.05654],
  ],
  Dusseldorf: [
    [51.225402, 6.816314],
    [51.2334402, 6.7963134],
    [51.235402, 6.800314],
    [51.236402000000005, 6.784314],
    [51.250402, 6.7853140000000005]
  ],
};

export const cityLocations = {
  Paris: [48.85661, 2.351499],
  Cologne: [50.938361, 6.959974],
  Brussels: [50.846557, 4.351697],
  Amsterdam: [52.38333, 4.9],
  Hamburg: [53.550341, 10.000654],
  Dusseldorf: [51.225402, 6.776314]
};
