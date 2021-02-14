import { DateTime } from 'luxon';
import Logger from '../services/logger';

export const getFromISO = (date: string): DateTime => {
  return DateTime.fromISO(date);
};

export const formatDate = (date: string, format: string = 'date'): string => {
  try {
    switch (format) {
      case 'date':
        return getFromISO(date).toFormat('yyyy-MM-dd');

      case 'datetime':
        return getFromISO(date).toFormat('yyyy-MM-dd hh:mm a');

      case 'datetime24':
        return getFromISO(date).toFormat('yyyy-MM-dd HH:mm');

      case 'time':
        return getFromISO(date).toFormat('hh:mm a');

      default:
        return getFromISO(date).toLocaleString();
    }
  } catch (err) {
    Logger.error(`(Date service) error: ${err}`);
    return '-';
  }
};
