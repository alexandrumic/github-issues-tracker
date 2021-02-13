import { asyncActionCreator } from '../utils';

import types from './types';

const get = asyncActionCreator(
  types.GET_ISSUES,
  types.GET_ISSUES_SUCCESS,
  types.GET_ISSUES_ERROR,
);

export default {
  get,
};
