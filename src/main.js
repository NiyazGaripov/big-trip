import {renderComponent, RenderPosition} from './utils/render.js';
import {TripEvent} from './components/event.js';
import {Filter} from './components/filter.js';
import {Navigation} from './components/nav-menu.js';
import {Sort} from './components/sort.js';
import {TripDays} from './components/trip-days.js';
import {TripEventForm} from './components/trip-event-form.js';
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

const renderTrip = (parentNode, it) => {
  const replaceRoutePointToEventForm = () => {
    parentNode.replaceChild(tripEventFormComponent.getElement(), tripEventComponent.getElement());
  };

  const replaceEventFormToRoutePoint = () => {
    parentNode.replaceChild(tripEventComponent.getElement(), tripEventFormComponent.getElement());
  };

  const tripEventComponent = new TripEvent(it);
  const eventRollupButton = tripEventComponent.getElement().querySelector(`.event__rollup-btn`);

  const tripEventFormComponent = new TripEventForm(it);
  const form = tripEventFormComponent.getElement();

  renderComponent(parentNode, tripEventComponent.getElement());
};

renderComponent(tripMain, new TripInfo(events).getElement(), RenderPosition.AFTERBEGIN);
renderComponent(tripMainControls, new Navigation(navList).getElement());
renderComponent(tripMainControls, new Filter(filters).getElement());
renderComponent(tripEvents, new Sort(sortList).getElement());
renderComponent(tripEvents, new TripDays(events).getElement());

const tripEventsList = tripEvents.querySelectorAll(`.trip-events__list`);

events.forEach((it) => {
  tripEventsList.forEach((event) => {
    renderTrip(event, it);
  });
});
