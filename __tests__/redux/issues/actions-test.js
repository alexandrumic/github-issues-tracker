import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import actions from '../../../src/redux/issues/actions';
import sagas from '../../../src/redux/issues/sagas';
import types from '../../../src/redux/issues/types';
import API from '../../../src/api/issues';

describe('Actions test suite', () => {
  it('should create an action to set owner', () => {
    const text = 'vercel';

    const expectedAction = {
      type: types.SET_OWNER,
      payload: text,
    };

    expect(actions.setOwner(text)).toEqual(expectedAction)
  });

  it('should create an action to set repo', () => {
    const text = 'swr';

    const expectedAction = {
      type: types.SET_REPO,
      payload: text,
    };

    expect(actions.setRepo(text)).toEqual(expectedAction)
  });

  it('should create an action to set state filter', () => {
    const text = 'open';

    const expectedAction = {
      type: types.SET_FILTER_STATE,
      payload: text,
    };

    expect(actions.setStateFilter(text)).toEqual(expectedAction)
  });

  it('should create an action to set sort filter', () => {
    const text = 'created';

    const expectedAction = {
      type: types.SET_FILTER_SORT,
      payload: text,
    };

    expect(actions.setSortFilter(text)).toEqual(expectedAction)
  });

  it('should create an action to toggle favourite', () => {
    const id = 123;

    const expectedAction = {
      type: types.TOGGLE_FAVOURITE,
      payload: id,
    };

    expect(actions.toggleFavourite(id)).toEqual(expectedAction)
  });

  it('should create an action to reset issue details to initial state', () => {
    const expectedAction = {
      type: types.RESET_ISSUE_DETAILS,
      payload: {},
    };

    expect(actions.resetIssueDetails()).toEqual(expectedAction)
  });

  it('should create an action to reset all state', () => {
    const expectedAction = {
      type: types.RESET,
      payload: {},
    };

    expect(actions.reset()).toEqual(expectedAction)
  });

  it('should fetch data successfully', async () => {
    const payload = {
      per_page: 15,
      page: 1,
      state: 'all',
      sort: 'created',
      owner: 'vercel',
      repo: 'swr',
    };

    const res = await API.get(payload);

    return expectSaga(() => sagas.getIssues({ payload }))
      .provide([
        [call(API.get, payload), res],
      ])
      .put(actions.get.success(res))
      .dispatch(actions.get.pending())
      .run(false);
  });
});
