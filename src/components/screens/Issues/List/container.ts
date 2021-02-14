import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';

import actions from '../../../../redux/issues/actions';
import { getIssuesState } from '../../../../redux/issues/selectors';
import { AppState } from '../../../../redux/types';

import IssuesList from './index';

const mapStateToProps = (state: AppState) => {
  return {
    issues: getIssuesState(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      getIssues: actions.get.pending,
      loadMore: actions.loadMore.pending,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);
