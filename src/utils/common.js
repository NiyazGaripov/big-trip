const MIN_COEFFICIENT = 0;
const MAX_COEFFICIENT = 30;
const ESC_KEYCODE = 27;

export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomArrayItem = (array) => {
  const randomItem = getRandomIntegerNumber(0, array.length);

  return array[randomItem];
};

export const generateDescription = (desc, minAmount, maxAmount) => {
  const sentencesAmount = getRandomIntegerNumber(minAmount, maxAmount);

  return new Array(sentencesAmount)
    .fill(``)
    .map(() => `${getRandomArrayItem(desc)}`)
    .join(` `);
};

export const getRandomDate = () => {
  const targetDate = new Date();
  const diffValue = getRandomIntegerNumber(MIN_COEFFICIENT, MAX_COEFFICIENT);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

export const getCommonPrice = (events) => {
  let commonPrice = 0;

  events.forEach((event) => {
    const commonOffersPrice = event.offers.map((it) => it.price).reduce((a, b) => (a + b), 0);
    commonPrice += (commonOffersPrice) + event.price;
  });

  return commonPrice;
};

export const onEscKeyDown = (evt, callback) => {
  if (evt.keyCode === ESC_KEYCODE) {
    callback();
  }
};
