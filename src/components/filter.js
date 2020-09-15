const createTripFilter = (item, isChecked) => {
  const {filter} = item;
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" ${isChecked ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
    </div>`
  );
};

export const createFilterComponent = (list) => {
  const createFilters = list.map((item, index) => createTripFilter(item, index === 0)).join(`\n`);

  return (
    `<form class="trip-filters" action="#" method="get">
      ${createFilters}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};
