import { createReducer } from 'reduxsauce';

import { apiStateCreator } from '../utils';
import { ActionInterface } from '../types';
import issuesTypes, { IssuesStateInterface } from './types';

export const initialState: IssuesStateInterface = {
  meta: {
    per_page: 15,
    page: 1,
    state: 'all',
    sort: 'created',
  },
  inputs: {
    owner: '',
    repo: '',
  },
  favourites: [],
  data: [],
  initialLoad: true,
  api: apiStateCreator(),
  loadMoreAPI: apiStateCreator(),
};

const getPending = (state: IssuesStateInterface) => {
  return {
    ...state,
    api: {
      ...initialState.api,
      pending: true,
    },
  };
};

const getSuccess = (state: IssuesStateInterface, action: ActionInterface) => {
  return {
    ...state,
    meta: action.payload.meta,
    data: action.payload.data,
    initialLoad: false,
    api: {
      ...initialState.api,
      success: true,
    },
  };
};

const getError = (state: IssuesStateInterface, action: ActionInterface) => {
  return {
    ...state,
    initialLoad: false,
    api: {
      ...initialState.api,
      error: action.payload,
    },
  };
};

const loadMore = (state: IssuesStateInterface) => ({
  ...state,
  loadMoreAPI: {
    ...initialState.loadMoreAPI,
    pending: true,
  },
});

const loadMoreSuccess = (
  state: IssuesStateInterface,
  action: ActionInterface,
) => ({
  ...state,
  meta: action.payload.meta,
  data: [...state.data, ...action.payload.data],
  loadMoreAPI: {
    ...initialState.loadMoreAPI,
    success: true,
  },
});

const loadMoreError = (
  state: IssuesStateInterface,
  action: ActionInterface,
) => ({
  ...state,
  loadMoreAPI: {
    ...initialState.loadMoreAPI,
    error: action.payload,
  },
});

const setOwner = (state: IssuesStateInterface, action: ActionInterface) => {
  return {
    ...state,
    inputs: {
      ...state.inputs,
      owner: action.payload,
    },
  };
};

const setRepo = (state: IssuesStateInterface, action: ActionInterface) => {
  return {
    ...state,
    inputs: {
      ...state.inputs,
      repo: action.payload,
    },
  };
};

const setFilterState = (
  state: IssuesStateInterface,
  action: ActionInterface,
) => {
  return {
    ...state,
    meta: {
      ...state.meta,
      state: action.payload,
    },
  };
};

const setFilterSort = (
  state: IssuesStateInterface,
  action: ActionInterface,
) => {
  return {
    ...state,
    meta: {
      ...state.meta,
      sort: action.payload,
    },
  };
};

const toggleFavourite = (
  state: IssuesStateInterface,
  action: ActionInterface,
) => {
  const itemID = action.payload;

  if (state.favourites.includes(itemID)) {
    return {
      ...state,
      favourites: state.favourites.filter((item) => item !== itemID),
    };
  }

  return {
    ...state,
    favourites: [...state.favourites, itemID],
  };
};

const actionHandlers = {
  [issuesTypes.GET_ISSUES]: getPending,
  [issuesTypes.GET_ISSUES_SUCCESS]: getSuccess,
  [issuesTypes.GET_ISSUES_ERROR]: getError,

  [issuesTypes.LOAD_MORE]: loadMore,
  [issuesTypes.LOAD_MORE_SUCCESS]: loadMoreSuccess,
  [issuesTypes.LOAD_MORE_ERROR]: loadMoreError,

  [issuesTypes.SET_OWNER]: setOwner,
  [issuesTypes.SET_REPO]: setRepo,

  [issuesTypes.SET_FILTER_STATE]: setFilterState,
  [issuesTypes.SET_FILTER_SORT]: setFilterSort,

  [issuesTypes.TOGGLE_FAVOURITE]: toggleFavourite,

  [issuesTypes.RESET]: () => initialState,
};

export default createReducer(initialState, actionHandlers);
