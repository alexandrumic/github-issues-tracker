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

const setOwner = actionCreator(types.SET_OWNER);
const setRepo = actionCreator(types.SET_REPO);

const reset = actionCreator(types.RESET);

export default {
  get,
  loadMore,

  setOwner,
  setRepo,

  reset,
};
