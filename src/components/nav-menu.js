import {AbstractComponent} from "./abstract-component";

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

export class Navigation extends AbstractComponent {
  constructor(list) {
    super();
    this._list = list;
  }

  getTemplate() {
    return createNavMenuComponent(this._list);
  }
}
