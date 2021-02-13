import { StyleSheet } from 'react-native';

import { Colors } from '../../../../../theme';

const ITEM_HEIGHT = 80;

export default StyleSheet.create({
  base: {
    backgroundColor: Colors.grey,
    height: ITEM_HEIGHT,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export { ITEM_HEIGHT };
