import { StyleSheet } from 'react-native';

import { Colors } from '../../../theme';

export default StyleSheet.create({
  base: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  stateBase: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  stateText: {
    fontWeight: '500',
    color: Colors.lightgrey,
  },
  summary: {
    fontSize: 12,
    color: Colors.labelgrey,
    marginTop: 8,
    marginLeft: 5,
  },
  bodyContainer: {
    marginTop: 20,
  },
});
