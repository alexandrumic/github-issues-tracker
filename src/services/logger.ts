import { logger } from 'react-native-logs';
import { colorConsoleAsync } from 'react-native-logs/dist/transports/colorConsoleAsync';

const levels = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  none: 4,
};

const consoleLog = (msg: any, level: any) => {
  if (typeof msg === 'object') {
    setTimeout(function () {
      console.log(msg);
    }, 0);
  } else {
    colorConsoleAsync(msg, level);
  }
  return true;
};

const log = logger.createLogger({
  transport: (msg, level) => {
    consoleLog(msg, level);
    return true;
  },
  levels,
});

let severity = __DEV__ ? 'debug' : 'error';
if (process.env.NODE_ENV === 'test') {
  severity = 'none';
}

log.setSeverity(severity);

export default log;
