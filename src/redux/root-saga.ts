import { all, fork } from 'redux-saga/effects';

import issues from './issues/sagas';

export default function* root() {
  yield all([
    fork(issues.watchGetIssues),
    fork(issues.watchLoadMore),
    fork(issues.watchGetIssueDetails),
  ]);
}
