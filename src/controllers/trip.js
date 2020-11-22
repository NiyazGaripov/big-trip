import {onEscKeyDown} from "../utils/common";
import {TripEvent} from "../components/event";
import {TripEventForm} from "../components/trip-event-form";
import {renderComponent} from "../utils/render";
import {NoEvents} from "../components/no-events";
import {TripDays} from "../components/trip-days";
import {Sort} from './../components/sort';

const renderTrip = (parentNode, it) => {
  const replaceRoutePointToEventForm = () => {
    parentNode.replaceChild(tripEventFormComponent.getElement(), tripEventComponent.getElement());
  };

  const replaceEventFormToRoutePoint = () => {
    parentNode.replaceChild(tripEventComponent.getElement(), tripEventFormComponent.getElement());
  };

  const onFormCloseEsc = (evt) => {
    onEscKeyDown(evt, replaceEventFormToRoutePoint);
    document.removeEventListener(`keydown`, onFormCloseEsc);
  };

  const tripEventComponent = new TripEvent(it);

  tripEventComponent.setClickHandler(() => {
    replaceRoutePointToEventForm();
    document.addEventListener(`keydown`, onFormCloseEsc);
  });

  const tripEventFormComponent = new TripEventForm(it);

  tripEventFormComponent.setSubmitHandler(() => {
    replaceEventFormToRoutePoint();
    document.removeEventListener(`keydown`, onFormCloseEsc);
  });

  renderComponent(parentNode, tripEventComponent);
};

export class TripController {
  constructor(container) {
    this._container = container;
    this._noEvents = new NoEvents();
    this._sortComponent = new Sort();
  }

  render(events) {
    const container = this._container;
    const hasEvents = events.length > 0;

    if (!hasEvents) {
      renderComponent(container, this._noEvents);
    }

    renderComponent(container, this._sortComponent);
    renderComponent(container, new TripDays(events));

    const tripEventsList = container.querySelectorAll(`.trip-events__list`);

    events.forEach((it) => {
      tripEventsList.forEach((event) => {
        renderTrip(event, it);
      });
    });
  }
}
