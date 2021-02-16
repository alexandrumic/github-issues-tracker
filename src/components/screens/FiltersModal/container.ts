import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';

import actions from '../../../redux/issues/actions';
import {
  getStateFilter,
  getSortFilter,
  getOwnerValue,
  getRepoValue,
} from '../../../redux/issues/selectors';
import { AppState } from '../../../redux/types';

import FiltersModal from './index';

const mapStateToProps = (state: AppState) => {
  return {
    stateFilter: getStateFilter(state),
    sortFilter: getSortFilter(state),
    owner: getOwnerValue(state),
    repo: getRepoValue(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      setStateFilter: actions.setStateFilter,
      setSortFilter: actions.setSortFilter,

      getIssues: actions.get.pending,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersModal);
