import {renderComponent, RenderPosition} from './utils/render.js';
import {Filter} from './components/filter.js';
import {Navigation} from './components/nav-menu.js';
import {TripInfo} from './components/trip-info.js';
import {generateNavigationList} from './mock/nav-menu.js';
import {generateFilter} from './mock/filter.js';
import {generateEventCards} from './mock/event.js';
import {TripController} from "./controllers/trip";

const TRIP_EVENT_COUNT = 20;
const tripMain = document.querySelector(`.trip-main`);
const tripMainControls = tripMain.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

const navList = generateNavigationList();
const filters = generateFilter();
const events = generateEventCards(TRIP_EVENT_COUNT);

renderComponent(tripMain, new TripInfo(events), RenderPosition.AFTERBEGIN);
renderComponent(tripMainControls, new Navigation(navList));
renderComponent(tripMainControls, new Filter(filters));

const trip = new TripController(tripEvents);
trip.render(events);

