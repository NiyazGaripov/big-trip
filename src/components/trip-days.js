
export const createTripDaysComponent = (events) => {
  const sortEvents = events.slice().sort((a, b) => a.date - b.date);

  return (
    `<ul class="trip-days">
        ${sortEvents.map((it, index) => createTripDayComponent(it, index)).join(`\n`)}
    </ul>`
  );
};
