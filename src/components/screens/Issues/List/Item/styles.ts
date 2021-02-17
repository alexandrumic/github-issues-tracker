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
    justifyContent: 'space-between',
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
  favIcon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    position: 'relative',
    right: 0,
  },
  summary: {
    fontSize: 12,
    color: Colors.labelgrey,
    marginTop: 5,
  },
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 10,
    right: 10,
  },
});

export { ITEM_HEIGHT };
