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

const getIssueDetails = asyncActionCreator(
  types.GET_ISSUE_DETAILS,
  types.GET_ISSUE_DETAILS_SUCCESS,
  types.GET_ISSUE_DETAILS_ERROR,
);

const setOwner = actionCreator(types.SET_OWNER);
const setRepo = actionCreator(types.SET_REPO);

const setStateFilter = actionCreator(types.SET_FILTER_STATE);
const setSortFilter = actionCreator(types.SET_FILTER_SORT);

const toggleFavourite = actionCreator(types.TOGGLE_FAVOURITE);

const resetIssueDetails = actionCreator(types.RESET_ISSUE_DETAILS);
const reset = actionCreator(types.RESET);

export default {
  get,
  loadMore,

  getIssueDetails,

  setOwner,
  setRepo,

  setStateFilter,
  setSortFilter,

  toggleFavourite,

  resetIssueDetails,
  reset,
};
