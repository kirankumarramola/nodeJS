const availability = require('timeslot-availability');

const start = new Date('2022-11-30T08:00:00.000Z');
const end = new Date('2022-11-30T16:00:00.000Z');
const timespan = 60 * 60; // 60 minutes

const booked = [
  {
    start: '2022-11-30T09:00:00.000Z',
    end: '2022-11-30T11:00:00.000Z',
  },
  {
    start: '2022-11-30T11:00:00.000Z',
    end: '2022-11-29T12:00:00.000Z',
  },
  {
    start: '2022-11-29T14:00:00.000Z',
    end: '2022-11-29T15:30:00.000Z',
  },
];

const bookable = availability(start, end, timespan, booked);

console.log(bookable);