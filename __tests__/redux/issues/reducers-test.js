import reducer from '../../../src/redux/issues/reducer';
import types from '../../../src/redux/issues/types';
import { apiStateCreator } from '../../../src/redux/utils';

const initialState = {
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
  current: {},
  initialLoad: true,
  api: apiStateCreator(),
  loadMoreAPI: apiStateCreator(),
};

describe('Reducers test suite', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it('should handle SET_OWNER', () => {
    expect(
      reducer(initialState, {
        type: types.SET_OWNER,
        payload: 'vercel'
      })
    ).toEqual({
      meta: {
        per_page: 15,
        page: 1,
        state: 'all',
        sort: 'created',
      },
      inputs: {
        owner: 'vercel',
        repo: '',
      },
      favourites: [],
      data: [],
      current: {},
      initialLoad: true,
      api: apiStateCreator(),
      loadMoreAPI: apiStateCreator(),
    })
  });

  it('should handle SET_REPO', () => {
    expect(
      reducer(initialState, {
        type: types.SET_REPO,
        payload: 'swr'
      })
    ).toEqual({
      meta: {
        per_page: 15,
        page: 1,
        state: 'all',
        sort: 'created',
      },
      inputs: {
        owner: '',
        repo: 'swr',
      },
      favourites: [],
      data: [],
      current: {},
      initialLoad: true,
      api: apiStateCreator(),
      loadMoreAPI: apiStateCreator(),
    })
  });

  it('should handle SET_FILTER_STATE', () => {
    expect(
      reducer(initialState, {
        type: types.SET_FILTER_STATE,
        payload: 'open'
      })
    ).toEqual({
      meta: {
        per_page: 15,
        page: 1,
        state: 'open',
        sort: 'created',
      },
      inputs: {
        owner: '',
        repo: '',
      },
      favourites: [],
      data: [],
      current: {},
      initialLoad: true,
      api: apiStateCreator(),
      loadMoreAPI: apiStateCreator(),
    })
  });

  it('should handle SET_FILTER_SORT', () => {
    expect(
      reducer(initialState, {
        type: types.SET_FILTER_SORT,
        payload: 'comments'
      })
    ).toEqual({
      meta: {
        per_page: 15,
        page: 1,
        state: 'all',
        sort: 'comments',
      },
      inputs: {
        owner: '',
        repo: '',
      },
      favourites: [],
      data: [],
      current: {},
      initialLoad: true,
      api: apiStateCreator(),
      loadMoreAPI: apiStateCreator(),
    })
  });

  it('should handle TOGGLE_FAVOURITE', () => {
    expect(
      reducer(initialState, {
        type: types.TOGGLE_FAVOURITE,
        payload: 123
      })
    ).toEqual({
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
      favourites: [123],
      data: [],
      current: {},
      initialLoad: true,
      api: apiStateCreator(),
      loadMoreAPI: apiStateCreator(),
    });

    expect(
      reducer({
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
        favourites: [123],
        data: [],
        current: {},
        initialLoad: true,
        api: apiStateCreator(),
        loadMoreAPI: apiStateCreator(),
      }, {
        type: types.TOGGLE_FAVOURITE,
        payload: 456
      })
    ).toEqual({
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
      favourites: [123, 456],
      data: [],
      current: {},
      initialLoad: true,
      api: apiStateCreator(),
      loadMoreAPI: apiStateCreator(),
    });

    expect(
      reducer({
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
        favourites: [123, 456],
        data: [],
        current: {},
        initialLoad: true,
        api: apiStateCreator(),
        loadMoreAPI: apiStateCreator(),
      }, {
        type: types.TOGGLE_FAVOURITE,
        payload: 456
      })
    ).toEqual({
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
      favourites: [123],
      data: [],
      current: {},
      initialLoad: true,
      api: apiStateCreator(),
      loadMoreAPI: apiStateCreator(),
    })
  });

  it('should handle GET_ISSUES_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.GET_ISSUES_SUCCESS,
        payload: {
          meta: {
            per_page: 15,
            page: 1,
            state: 'all',
            sort: 'comments',
          },
          data: [{
            id: 1,
            title: 'New Issue'
          }]
        }
      })
    ).toEqual({
      meta: {
        per_page: 15,
        page: 1,
        state: 'all',
        sort: 'comments',
      },
      inputs: {
        owner: '',
        repo: '',
      },
      favourites: [],
      data: [{
        id: 1,
        title: 'New Issue'
      }],
      current: {},
      initialLoad: false,
      api: {
        ...initialState.api,
        success: true,
      },
      loadMoreAPI: apiStateCreator(),
    })
  });
});
