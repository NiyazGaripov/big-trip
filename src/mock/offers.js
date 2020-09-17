import {OFFERS} from './../constants.js';
import {getRandomArrayItem} from './../utils/common.js';

const generateOffer = () => {
  return {
    offers: getRandomArrayItem(OFFERS),
  };
};
