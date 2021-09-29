import { _n } from "./translators";

const ONE_SECOND = 1000;
const MINUTE_IN_SECONDS = 60 * ONE_SECOND;
const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS;
const DAY_IN_SECONDS = 24 * HOUR_IN_SECONDS;
const WEEK_IN_SECONDS = 7 * DAY_IN_SECONDS;
const MONTH_IN_SECONDS = 30 * DAY_IN_SECONDS;
const YEAR_IN_SECONDS = 365 * DAY_IN_SECONDS;

function diff(a, b = Date.now(), c = ONE_SECOND) {
  return Math.floor(Math.abs(a - b) / c);
}

function isSame(year = undefined, month = undefined, day = undefined) {
  const today = new Date();

  year = year ?? today.getFullYear();
  month = month ?? today.getMonth() + 1;
  day = day ?? today.getDate();

  const match = new Date(year, month - 1, day);

  return today.setHours(0, 0, 0, 0) === match.setHours(0, 0, 0, 0);
}

function pluralizeHumanDiff(c, s, p) {
  return `${c} ${_n(s, p, c)}`;
}

function humanDiff(a, b = Date.now()) {
  const years = diff(a, b, YEAR_IN_SECONDS);
  if (years) {
    return pluralizeHumanDiff(years, "year", "years");
  }

  const months = diff(a, b, MONTH_IN_SECONDS);
  if (months) {
    return pluralizeHumanDiff(months, "month", "months");
  }

  const weeks = diff(a, b, WEEK_IN_SECONDS);
  if (weeks) {
    return pluralizeHumanDiff(weeks, "week", "weeks");
  }

  const days = diff(a, b, DAY_IN_SECONDS);
  if (days) {
    return pluralizeHumanDiff(days, "day", "days");
  }

  const hours = diff(a, b, HOUR_IN_SECONDS);
  if (hours) {
    return pluralizeHumanDiff(hours, "hour", "hours");
  }

  const minutes = diff(a, b, MINUTE_IN_SECONDS);
  if (minutes) {
    return pluralizeHumanDiff(minutes, "minute", "minutes");
  }

  const seconds = diff(a, b, ONE_SECOND);

  return pluralizeHumanDiff(seconds, "second", "seconds");
}

export { diff, humanDiff, isSame };
