const config = {
  API: {
    host: 'https://api.github.com',
  },
};

const API_HOST = config.API.host;
const REQUEST_TIMEOUT = 40 * 1000; // ms

export { API_HOST, REQUEST_TIMEOUT };

export default config;
