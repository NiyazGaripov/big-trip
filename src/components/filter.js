const FILTERS = [`everything`, `future`, `past`];

const createTripFilter = (filter) => {
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" checked>
      <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
    </div>`
  );
};

export const createFilterComponent = () => {
  const createFilters = FILTERS.map((filter) => createTripFilter(filter)).join(`\n`);

  return (
    `<form class="trip-filters" action="#" method="get">
      ${createFilters}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};
