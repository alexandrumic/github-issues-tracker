import { Navigation } from 'react-native-navigation';

import { registerScreens } from './navigation';
import { setDefaultOptions } from './navigation/options';
import { goToHome } from './navigation/navigate';

function start() {
  registerScreens();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(() => {
    setRoot();
  });
}

function setRoot() {
  goToHome();
}

export { start };
