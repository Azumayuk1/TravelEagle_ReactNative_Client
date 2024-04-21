import {DateData} from 'react-native-calendars';
import {colors} from '../../globalStyles/globalColors.tsx';

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const getShortDate = (date: Date): string => {
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');

  return `${day}.${month}`;
};

export const convertDateDataToDate = (dateData: DateData): Date | undefined => {
  if (
    dateData.year &&
    dateData.month >= 0 &&
    dateData.day >= 0 &&
    dateData.timestamp >= 0 &&
    dateData.dateString
  ) {
    return new Date(
      `${dateData.year}-${String(dateData.month).padStart(2, '0')}-${String(
        dateData.day,
      ).padStart(2, '0')}`,
    );
  } else {
    return undefined;
  }
};

/**
 * Converts wix formatted calendar date to Date object.
 * @param date - in "2012-04-24" format
 */
export const convertCalendarDateStringToDate = (date: string) => {
  const splitDate = date.split('-');
  const year = +splitDate[0];
  const month = +splitDate[1];
  const day = +splitDate[2];

  const newDate = new Date();
  newDate.setFullYear(year);
  newDate.setMonth(month - 1);
  newDate.setDate(day);

  return newDate;
};

export const getMarkedDates = (
  todayDate: string,
  startDate?: string,
  endDate?: string,
) => {
  if (startDate && endDate) {
    return {
      [todayDate]: {textColor: colors.primary},
      [startDate]: {startingDay: true, color: colors.tertiaryContainer},
      [endDate]: {endingDay: true, color: colors.tertiaryContainer},
    };
  } else if (startDate) {
    return {
      [todayDate]: {textColor: colors.primary},
      [startDate]: {startingDay: true, color: colors.tertiaryContainer},
    };
  } else {
    return {
      [todayDate]: {textColor: colors.primary},
    };
  }
};

export const countDaysBetweenDates = (
  startDate: Date,
  endDate: Date,
): number => {
  const oneDay = 24 * 60 * 60 * 1000;

  const utc1 = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
  );
  const utc2 = Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate(),
  );

  const diffDays = Math.floor((utc2 - utc1) / oneDay);

  return Math.abs(diffDays); // Return the absolute value to handle negative differences
};
