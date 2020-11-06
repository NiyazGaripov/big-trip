import {AbstractComponent} from "./abstract-component";

const createNoEventsComponent = () => {
  return (
    `<p class="trip-events__msg">Click New Event to create your first point</p>`
  );
};

export class NoEvents extends AbstractComponent {
  getTemplate() {
    return createNoEventsComponent();
  }
}
