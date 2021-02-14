import { StyleSheet } from 'react-native';

import { Colors } from '../../../theme';

export default StyleSheet.create({
  base: {
    flex: 1,
    padding: 10,
  },
  sortContainer: {
    marginBottom: 30,
  },
  filterContainer: {
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  radioContainer: {
    borderWidth: 1,
    borderColor: Colors.labelgrey,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 7,
    marginRight: 10,
  },
  activeContainer: {
    backgroundColor: Colors.blue,
    borderColor: Colors.blue,
  },
  radioText: {
    color: Colors.labelgrey,
  },
  activeContainerText: {
    color: Colors.white,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    alignSelf: 'center',
  },
});
