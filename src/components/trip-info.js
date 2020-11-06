import {getCommonPrice} from './../utils/common.js';
import {AbstractComponent} from "./abstract-component";

const createTripInfoComponent = (events) => {
  const cities = events.map((it) => it.city).join(`&mdash;`);
  const price = getCommonPrice(events);

  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${cities}</h1>

        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
      </div>

      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
      </p>
    </section>`
  );
};

export class TripInfo extends AbstractComponent {
  constructor(events) {
    super();
    this._events = events;
  }

  getTemplate() {
    return createTripInfoComponent(this._events);
  }
}
