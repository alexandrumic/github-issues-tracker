import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';

import actions from '../../../../redux/issues/actions';
import {
  getIssuesState,
  getOwnerValue,
  getRepoValue,
  getStateFilter,
  getSortFilter,
  getFavouritesIssuesIDs,
} from '../../../../redux/issues/selectors';
import { AppState } from '../../../../redux/types';

import IssuesList from './index';

const mapStateToProps = (state: AppState) => {
  return {
    issues: getIssuesState(state),
    owner: getOwnerValue(state),
    repo: getRepoValue(state),
    stateFilter: getStateFilter(state),
    sortFilter: getSortFilter(state),
    favouritesIssues: getFavouritesIssuesIDs(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      getIssues: actions.get.pending,
      loadMore: actions.loadMore.pending,

      toggleFavourite: actions.toggleFavourite,

      reset: actions.reset,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);
