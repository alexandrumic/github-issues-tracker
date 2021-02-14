import { StyleSheet } from 'react-native';

import { Colors } from '../../../../theme';

export default StyleSheet.create({
  base: {
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  disabled: {
    backgroundColor: Colors.darkgrey,
  },
});
