import {AbstractComponent} from './abstract-component';
import {SORT_ITEM_NAMES, SortType} from './../constants';

const createSortDirectionIcon = () => {
  return (
    `<svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
        <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
    </svg>`
  );
};

const createSortList = (item, isChecked) => {
  const icon = createSortDirectionIcon();

  return (
    `<div class="trip-sort__item  trip-sort__item--${item}">
        <input data-sort-type="${item}" id="sort-${item}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${name}" ${isChecked ? `checked` : ``}>
        <label class="trip-sort__btn" for="sort-${item}">
            ${item}
            ${item === `event` ? `` : icon}
        </label>
    </div>`
  );
};

const createSortComponent = () => {
  const sortList = SORT_ITEM_NAMES.map((item, index) => createSortList(item, index === 0)).join(`\n`);

  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day">Day</span>

      ${sortList}

      <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
    </form>`
  );
};

export class Sort extends AbstractComponent {
  constructor() {
    super();
    this._currentSortType = SortType.DEFAULT;
  }

  getTemplate() {
    return createSortComponent();
  }

  getSortType() {
    return this._currentSortType;
  }

  setSortTypeChangeHandler(callback) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target !== `LABEL`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;

      callback(this._currentSortType);
    });
  }
}
