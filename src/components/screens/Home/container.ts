import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';

import actions from '../../../redux/issues/actions';
import { getIssuesState } from '../../../redux/issues/selectors';
import { AppState } from '../../../redux/types';

import Home from './index';

const mapStateToProps = (state: AppState) => {
  return {
    issues: getIssuesState(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      setOwner: actions.setOwner,
      setRepo: actions.setRepo,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
