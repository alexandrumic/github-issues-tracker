import { call, put, takeLatest } from 'redux-saga/effects';

import { GetIssuesPayloadInterface } from '../types';

import API from '../../api/issues';
import Logger from '../../services/logger';
import issuesActions from './actions';
import types, { MetaInterface } from './types';

function* getIssues(action: GetIssuesPayloadInterface) {
  const { owner, repo, state = 'all', sort = 'created' } = action.payload;
  const meta: MetaInterface = {
    per_page: 15,
    page: 1,
    state,
    sort,
    owner,
    repo,
  };

  try {
    const data = yield call(API.get, meta);
    return yield put(issuesActions.get.success(data));
  } catch (err) {
    yield call(Logger.error, err);
    yield put(issuesActions.get.error(err));
  }
}

function* watchGetIssues() {
  yield takeLatest(types.GET_ISSUES, getIssues);
}

function* loadMore(action: GetIssuesPayloadInterface) {
  try {
    const data = yield call(API.get, action.payload);
    yield put(issuesActions.loadMore.success(data));
  } catch (err) {
    yield call(Logger.error, err);
    yield put(issuesActions.loadMore.error(err));
  }
}

function* watchLoadMore() {
  yield takeLatest(types.LOAD_MORE, loadMore);
}

export default {
  watchGetIssues,
  watchLoadMore,
};
