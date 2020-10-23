import {renderComponent} from './utils/render.js';
import {TripInfo} from './components/trip-info.js';
import {generateNavigationList} from './mock/nav-menu.js';
import {generateFilter} from './mock/filter.js';
import {generateSortList} from './mock/sort.js';
import {generateEventCards} from './mock/event.js';

const TRIP_EVENT_COUNT = 20;
const tripMain = document.querySelector(`.trip-main`);
const tripMainControls = tripMain.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const navList = generateNavigationList();
const filters = generateFilter();
const sortList = generateSortList();
const events = generateEventCards(TRIP_EVENT_COUNT);

renderComponent(tripMain, new TripInfo(events).getElement());
