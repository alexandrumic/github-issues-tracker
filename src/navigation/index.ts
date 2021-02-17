import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import store from '../redux/store';

import Home from '../components/screens/Home/container';
import IssuesList from '../components/screens/Issues/List/container';
import FavouritesIssues from '../components/screens/Issues/Favourites/container';
import IssueDetails from '../components/screens/IssueDetails';
import ChangeGithub from '../components/molecules/ChangeGithub/container';

import FiltersModal from '../components/screens/FiltersModal/container';

function registerScreens() {
  Navigation.registerComponentWithRedux('Home', () => Home, Provider, store);
  Navigation.registerComponentWithRedux(
    'IssuesList',
    () => IssuesList,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'FavouritesIssues',
    () => FavouritesIssues,
    Provider,
    store,
  );
  Navigation.registerComponent('IssueDetails', () => IssueDetails);
  Navigation.registerComponentWithRedux(
    'FiltersModal',
    () => FiltersModal,
    Provider,
    store,
  );

  Navigation.registerComponentWithRedux(
    'ChangeGithub',
    () => ChangeGithub,
    Provider,
    store,
  );
}

export { registerScreens };
