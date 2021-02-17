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
  favIcon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
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
  commentsContainer: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsIcon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
  commentsNoContainer: {
    marginLeft: 5,
    backgroundColor: Colors.blue,
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentsNo: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: '600',
  },
});

export { ITEM_HEIGHT };
