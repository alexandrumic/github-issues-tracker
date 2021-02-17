import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';

import actions from '../../../redux/issues/actions';

import IssuesList from './index';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      reset: actions.reset,
    },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(IssuesList);
