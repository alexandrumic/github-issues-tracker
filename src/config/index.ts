import env from 'react-native-config';

const IS_PRODUCTION = env.IS_PRODUCTION === 'true';

const config = {
  API: {
    host: env.API_URL,
  },
};

const API_HOST = config.API.host;
const REQUEST_TIMEOUT = 40 * 1000; // ms

export {
  API_HOST,
  REQUEST_TIMEOUT,
  IS_PRODUCTION,
};

export default config;
