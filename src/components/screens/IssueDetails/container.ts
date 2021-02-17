import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';

import actions from '../../../redux/issues/actions';
import {
  getCurrentIssue,
  getOwnerValue,
  getRepoValue,
  getIssuesAPI,
} from '../../../redux/issues/selectors';
import { AppState } from '../../../redux/types';

import IssuesList from './index';

const mapStateToProps = (state: AppState) => {
  return {
    issue: getCurrentIssue(state),
    API: getIssuesAPI(state),
    owner: getOwnerValue(state),
    repo: getRepoValue(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      getIssueDetails: actions.getIssueDetails.pending,
      resetIssue: actions.resetIssueDetails,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);
