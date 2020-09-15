const createNavigationItemComponent = (item, isActive) => {
  const {path, name} = item;
  const activeClass = isActive ? `trip-tabs__btn--active` : ``;

  return (
    `<a class="trip-tabs__btn ${activeClass}" href="${path}">${name}</a>`
  );
};

export const createNavMenuComponent = (list) => {
  const createNavigationList = list.map((item, index) => createNavigationItemComponent(item, index === 0)).join(`\n`);

  return (
    `<nav class="trip-controls__trip-tabs trip-tabs">
        ${createNavigationList}
    </nav>`
  );
};
