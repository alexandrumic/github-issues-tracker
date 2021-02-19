import { Navigation } from 'react-native-navigation';

import { Colors } from '../theme';

const setDefaultOptions = () =>
  Navigation.setDefaultOptions({
    popGesture: true,
    window: {
      backgroundColor: 'black',
    },
    layout: {
      componentBackgroundColor: Colors.white,
      orientation: ['portrait'],
      direction: 'locale',
    },
    topBar: {
      background: {
        color: Colors.black,
      },
      backButton: {
        showTitle: false,
        color: Colors.white,
      },
      title: {
        color: Colors.white,
      },
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
      backgroundColor: Colors.black,
    },
    bottomTab: {
      fontSize: 12,
      selectedIconColor: Colors.blue,
      selectedTextColor: Colors.blue,
      textColor: Colors.white,
    },
  });

export { setDefaultOptions };
