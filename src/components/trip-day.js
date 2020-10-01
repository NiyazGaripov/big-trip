import {MONTH_NAMES} from './../constants.js';
import {getRandomDate} from './../utils/common.js';

export const createTripDayComponent = () => {
  const date = `${MONTH_NAMES[getRandomDate().getMonth()]} ${getRandomDate().getDate()} `;

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">1</span>
        <time class="day__date" datetime="2019-03-18">${date}</time>
      </div>
      <ul class="trip-events__list"></ul>
    </li>`
  );
};
