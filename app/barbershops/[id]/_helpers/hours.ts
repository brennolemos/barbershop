import { addMinutes, format, setHours, setMinutes } from "date-fns";

/**
 * The function generates a list of time slots from 9:00 AM to 9:00 PM with a 45-minute interval.
 * @param {Date} date - The `date` parameter is a `Date` object that represents a specific date for
 * which you want to generate a list of day time slots.
 * @returns The function `generateDayTimeList` returns an array of time strings in the format "HH:mm".
 */
export const generateDayTimeList = (date: Date) => {
  const startTime = setMinutes(setHours(date, 9), 0);
  const endTime = setMinutes(setHours(date, 21), 0);
  const interval = 45;
  const timeList = [];

  let currentTime = startTime;

  while (currentTime <= endTime) {
    timeList.push(format(currentTime, "HH:mm"));
    currentTime = addMinutes(currentTime, interval);
  }

  return timeList;
};
