import {AbstractComponent} from "./abstract-component";

const createTripEventsComponent = () => {
  return (
    `<section class="trip-events">
      <h2 class="visually-hidden">Trip events</h2>
    </section>`
  );
};

export class TripEvents extends AbstractComponent {
  constructor() {
    super();
  }
}
