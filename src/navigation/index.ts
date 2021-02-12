import { Navigation } from 'react-native-navigation';

import Home from '../components/screens/Home';
import IssuesList from '../components/screens/Issues/List';
import FavouritesIssues from '../components/screens/Issues/Favourites';
import IssueDetails from '../components/screens/IssueDetails';

function registerScreens() {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('IssuesList', () => IssuesList);
  Navigation.registerComponent('FavouritesIssues', () => FavouritesIssues);
  Navigation.registerComponent('IssueDetails', () => IssueDetails);
}

export { registerScreens };
