import {NAVIGATION_ITEM_NAMES} from './../constants.js';

export const generateNavigationList = () => {
  const FIRST_ELEMENT = 0;

  return NAVIGATION_ITEM_NAMES.map((it) => {
    return {
      path: it.split(` `)[FIRST_ELEMENT].toLowerCase(),
      name: it,
    };
  });
};
