import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
  text: {
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 100,
    fontSize: 16,
    fontWeight: '500',
  },
});
