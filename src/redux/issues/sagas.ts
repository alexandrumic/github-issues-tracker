import { call, put, takeLatest } from 'redux-saga/effects';

import { GetIssuesPayloadInterface } from '../types';

import API from '../../api/issues';
import Logger from '../../services/logger';
import issuesActions from './actions';
import types from './types';

function* getIssues(action: GetIssuesPayloadInterface) {
  const { owner, repo } = action.payload;

  try {
    const data = yield call(API.get, owner, repo);
    yield put(issuesActions.get.success(data));
  } catch (err) {
    yield call(Logger.error, err);
    yield put(issuesActions.get.error(err));
  }
}

function* watchGetIssues() {
  yield takeLatest(types.GET_ISSUES, getIssues);
}

export default {
  watchGetIssues,
};
