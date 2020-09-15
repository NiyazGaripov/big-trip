import {FILTERS} from './../constants.js';

export const generateFilter = () => {
  return FILTERS.map((it) => {
    return {
      filter: it,
    };
  });
};
