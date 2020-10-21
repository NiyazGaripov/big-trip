import {createElement} from "../utils/render";

const createNavigationItemComponent = (item, isActive) => {
  const {path, name} = item;
  const activeClass = isActive ? `trip-tabs__btn--active` : ``;

  return (
    `<a class="trip-tabs__btn ${activeClass}" href="${path}">${name}</a>`
  );
};

const createNavMenuComponent = (list) => {
  const createNavigationList = list.map((item, index) => createNavigationItemComponent(item, index === 0)).join(`\n`);

  return (
    `<nav class="trip-controls__trip-tabs trip-tabs">
        ${createNavigationList}
    </nav>`
  );
};

export class Navigation {
  constructor(list) {
    this._list = list;
    this._element = null;
  }

  getTemplate() {
    return createNavMenuComponent(this._list);
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
