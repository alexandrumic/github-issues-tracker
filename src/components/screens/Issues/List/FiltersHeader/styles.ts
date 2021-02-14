import { StyleSheet } from 'react-native';

import { Colors } from '../../../../../theme';

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    borderBottomColor: Colors.darkgrey,
    borderBottomWidth: 1,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    resizeMode: 'contain',
    width: 15,
    height: 15,
    marginRight: 10,
  },
  text: {
    fontWeight: '500',
  },
});
