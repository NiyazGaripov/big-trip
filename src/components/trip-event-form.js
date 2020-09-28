import {EVENT_GROUPS, CITIES} from './../constants.js';

const createEventTypeItemMarkup = (item, isChecked) => {
  let name = item[0].toUpperCase() + item.slice(1);

  return (
    `<div class="event__type-item">
      <input id="event-type-${item}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item}" ${isChecked ? `checked` : ``}>
      <label class="event__type-label  event__type-label--${item}" for="event-type-${item}-1">${name}</label>
    </div>`
  );
};

const createEventTypeGroupMarkup = (list, current) => {
  const transfers = list.slice(0, 7);
  const activities = list.slice(7);

  const eventTypeTransfers = transfers.map((it, index, array) => createEventTypeItemMarkup(it, array[index] === current)).join(`\n`);
  const eventTypeActivities = activities.map((it, index, array) => createEventTypeItemMarkup(it, array[index] === current)).join(`\n`);

  return (
    `<fieldset class="event__type-group">
      <legend class="visually-hidden">Transfer</legend>
      ${eventTypeTransfers}
    </fieldset>
    <fieldset class="event__type-group">
      <legend class="visually-hidden">Activity</legend>
      ${eventTypeActivities}
    </fieldset>`
  );
};

const createDestinationMarkup = (destination) => {
  return (
    `<option value=${destination}></option>`
  );
};

const createOfferMarkup = (item, isChecked) => {
  const {offer, title, price} = item;

  return (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer}-1" type="checkbox" name="event-offer-${offer}" ${isChecked ? `checked` : ``}>
      <label class="event__offer-label" for="event-offer-${offer}-1">
        <span class="event__offer-title">${title}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${price}</span>
      </label>
    </div>`
  );
};

const createEventPhotoMarkup = (src) => {
  return (
    `<img class="event__photo" src=${src} alt="Event photo">`
  );
};

export const createTripEventFormComponent = (event) => {
  const {eventType, city, cost, offers, description, photos} = event;
  const eventTypeGroups = createEventTypeGroupMarkup(EVENT_GROUPS, eventType);
  const destinations = CITIES.map((it) => createDestinationMarkup(it));
  const eventOffers = offers.map((it, index) => createOfferMarkup(it, index === 0)).join(`\n`);
  const eventPhotos = photos.map((it) => createEventPhotoMarkup(it)).join(`\n`);

  return (
    `<form class="trip-events__item  event  event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${eventType}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            ${eventTypeGroups}
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            Flight to
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
          <datalist id="destination-list-1">
            ${destinations}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">
            From
          </label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 00:00">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">
            To
          </label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 00:00">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">${offers.length > 0 ? `Offers` : ``}</h3>

          <div class="event__available-offers">
            ${eventOffers}
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
                ${eventPhotos}
            </div>
          </div>
        </section>
      </section>
    </form>`
  );
};
