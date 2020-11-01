import {createElement} from './../utils/render.js';

const createNoEventsComponent = () => {
  return (
    `<p class="trip-events__msg">Click New Event to create your first point</p>`
  );
};

export class NoEvents {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoEventsComponent();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
