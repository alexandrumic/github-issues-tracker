import { StyleSheet } from 'react-native';

import { Colors } from '../../../../theme';

export default StyleSheet.create({
  base: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    color: Colors.black,
    borderWidth: 1,
    borderColor: Colors.darkgrey,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabled: {
    color: Colors.grey,
  },
  error: {
    color: Colors.red,
    borderBottomColor: Colors.red,
  },
});
