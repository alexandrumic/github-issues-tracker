import { actionCreator, asyncActionCreator } from '../utils';

import types from './types';

const get = asyncActionCreator(
  types.GET_ISSUES,
  types.GET_ISSUES_SUCCESS,
  types.GET_ISSUES_ERROR,
);

const loadMore = asyncActionCreator(
  types.LOAD_MORE,
  types.LOAD_MORE_SUCCESS,
  types.LOAD_MORE_ERROR,
);

const reset = actionCreator(types.RESET);

export default {
  get,
  loadMore,
  reset,
};
