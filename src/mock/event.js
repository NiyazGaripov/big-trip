import {EVENT_GROUPS, CITIES, DESCRIPTIONS, COST_COEFFICIENT} from './../constants.js';
import {getRandomIntegerNumber, getRandomArrayItem, generateDescription, getRandomDate} from './../utils/common.js';
import {generateOffers} from './../mock/offers.js';

const MIN_OFFERS_AMOUNT = 0;
const MAX_OFFERS_AMOUNT = 5;
const MIN_AMOUNT = 1;
const MAX_AMOUNT = 5;

const generateEventCard = () => {
  const eventType = getRandomArrayItem(EVENT_GROUPS);
  const city = getRandomArrayItem(CITIES);
  const date = getRandomDate();
  const cost = Math.floor(Math.random() * COST_COEFFICIENT);
  const offersAmount = getRandomIntegerNumber(MIN_OFFERS_AMOUNT, MAX_OFFERS_AMOUNT);
  const offers = generateOffers(offersAmount);
  const description = generateDescription(DESCRIPTIONS, MIN_AMOUNT, MAX_AMOUNT);
  const photos = new Array(getRandomIntegerNumber(MIN_AMOUNT, MAX_AMOUNT)).fill(``).map(() => `http://picsum.photos/248/152?r=${Math.random()}`);

  return {
    eventType,
    city,
    date,
    cost,
    offers,
    description,
    photos,
  };
};

export const generateEventCards = (amount) => {
  return new Array(amount)
    .fill(``)
    .map(generateEventCard);
};
