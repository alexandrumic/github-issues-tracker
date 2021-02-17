import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';

import actions from '../../../../redux/issues/actions';
import {
  getFavouritesIssuesList,
  getFavouritesIssuesIDs,
} from '../../../../redux/issues/selectors';
import { AppState } from '../../../../redux/types';

import IssuesList from './index';

const mapStateToProps = (state: AppState) => {
  return {
    favouritesIssuesList: getFavouritesIssuesList(state),
    favouritesIssuesIDs: getFavouritesIssuesIDs(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      toggleFavourite: actions.toggleFavourite,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);
