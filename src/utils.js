import dayjs from "dayjs";

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomBoolean = () => Boolean(getRandomInteger(0, 1));

export const generateRandomArray = (array, minCount, maxCount) => {
  const count = getRandomInteger(minCount, maxCount);
  const randomArray = new Array(count).fill().map(() => getElementFromArray(array));

  return randomArray;
};

export const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const generateRandomDate = function (start, end) {
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return dayjs(randomDate);
};

export const getElementFromArray = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

export const getUniqueArray = (array) => {
  const arraySet = new Set(array);
  const uniqueArray = Array.from(arraySet);
  return uniqueArray;
};
