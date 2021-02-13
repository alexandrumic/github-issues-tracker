import { createReducer } from 'reduxsauce';

import { apiStateCreator } from '../utils';
import { ActionInterface } from '../types';
import issuesTypes, { IssuesStateInterface } from './types';

export const initialState: IssuesStateInterface = {
  data: [],
  api: apiStateCreator(),
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
    data: action.payload,
    api: {
      ...initialState.api,
      success: true,
    },
  };
};

const getError = (state: IssuesStateInterface, action: ActionInterface) => {
  return {
    ...state,
    api: {
      ...initialState.api,
      error: action.payload,
    },
  };
};

const actionHandlers = {
  [issuesTypes.GET_ISSUES]: getPending,
  [issuesTypes.GET_ISSUES_SUCCESS]: getSuccess,
  [issuesTypes.GET_ISSUES_ERROR]: getError,
};

export default createReducer(initialState, actionHandlers);
