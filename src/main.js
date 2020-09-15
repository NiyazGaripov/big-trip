import {renderComponent} from './utils/render.js';
import {createTripEventsItemComponent} from './components/event.js';
import {createTripEventsListComponent} from './components/events.js';
import {createFilterComponent} from './components/filter.js';
import {createNavMenuComponent} from './components/nav-menu.js';
import {createSortComponent} from './components/sort.js';
import {createTripDayComponent} from './components/trip-day.js';
import {createTripDaysComponent} from './components/trip-days.js';
import {createTripEventFormComponent} from './components/trip-event-form.js';
import {createTripInfoComponent} from './components/trip-info.js';
import {generateNavigationList} from './mock/nav-menu.js';
import {generateFilter} from './mock/filter.js';

const TRIP_EVENT_COUNT = 3;
const tripMain = document.querySelector(`.trip-main`);
const tripMainControls = tripMain.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const navList = generateNavigationList();
const filters = generateFilter();

renderComponent(tripMain, createTripInfoComponent(), `afterbegin`);
renderComponent(tripMainControls, createNavMenuComponent(navList));
renderComponent(tripMainControls, createFilterComponent(filters));
renderComponent(tripEvents, createSortComponent());
renderComponent(tripEvents, createTripEventFormComponent());
renderComponent(tripEvents, createTripDaysComponent());

const tripDays = tripEvents.querySelector(`.trip-days`);
renderComponent(tripDays, createTripDayComponent());

const tripDay = tripEvents.querySelector(`.trip-days__item`);
renderComponent(tripDay, createTripEventsListComponent());

const tripEventsList = tripEvents.querySelector(`.trip-events__list`);
for (let i = 0; i < TRIP_EVENT_COUNT; i++) {
  renderComponent(tripEventsList, createTripEventsItemComponent());
}
