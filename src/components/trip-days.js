import {MONTH_NAMES} from "../constants";
import {createTripEventsItemComponent} from "./event";

const createTripDayComponent = (item, index) => {
  const tripEvent = createTripEventsItemComponent(item);

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${index + 1}</span>
        <time class="day__date" datetime="2019-03-18">${MONTH_NAMES[item.date.getMonth()]} ${item.date.getDate()}</time>
      </div>
      <ul class="trip-events__list">
          ${tripEvent}
      </ul>
    </li>`
  );
};


export const createTripDaysComponent = (events) => {
  const sortEvents = events.slice().sort((a, b) => a.date - b.date);

  return (
    `<ul class="trip-days">
        ${sortEvents.map((it, index) => createTripDayComponent(it, index)).join(`\n`)}
    </ul>`
  );
};
