import { StyleSheet } from 'react-native';

import { Colors } from '../../../../../theme';

const ITEM_HEIGHT = 90;

export default StyleSheet.create({
  base: {
    height: ITEM_HEIGHT,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    color: Colors.labelgrey,
  },
  updatedDate: {
    fontStyle: 'italic',
  },
  stateBase: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  stateText: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.lightgrey,
  },
  summary: {
    // flex: 1,
    fontSize: 12,
    color: Colors.labelgrey,
    marginTop: 5,
  },
});

export { ITEM_HEIGHT };
