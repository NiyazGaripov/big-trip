import {OFFERS, COST_COEFFICIENT} from './../constants.js';
import {getRandomArrayItem} from './../utils/common.js';

const generateOffer = () => {
  return {
    title: getRandomArrayItem(OFFERS),
    price: Math.floor(Math.random() * COST_COEFFICIENT),
  };
};

export const generateOffers = (amount) => {
  return new Array(amount)
    .fill(``)
    .map(generateOffer);
};
