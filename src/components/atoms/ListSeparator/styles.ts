import { StyleSheet } from 'react-native';

import { Colors } from '../../../theme';

export default StyleSheet.create({
  base: {
    width: 10,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: Colors.darkgrey,
  },
  horizontalLine: {
    width: '100%',
    height: 0.5,
    backgroundColor: Colors.darkgrey,
  },
});
