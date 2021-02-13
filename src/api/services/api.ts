import { create } from 'apisauce';

import { API_HOST, REQUEST_TIMEOUT } from '../../config';
import Logger from '../../services/logger';

const createAPI = () => {
  let apiObj = create({
    baseURL: API_HOST,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: REQUEST_TIMEOUT,
  });

  apiObj.addMonitor(Logger.debug);

  return apiObj;
};

export default createAPI;
