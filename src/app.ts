import { Navigation } from 'react-native-navigation';

import { registerScreens } from './navigation';

function start() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    setRoot();
  });
}

function setRoot() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  visible: false,
                  height: 0,
                },
              },
            },
          },
        ],
      },
    },
  });
}

export { start };
