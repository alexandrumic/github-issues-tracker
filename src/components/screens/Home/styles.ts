import { StyleSheet } from 'react-native';

import { screenHeight } from '../../../theme/metrics';

export default StyleSheet.create({
  base: {
    padding: 10,
  },
  image: {
    alignSelf: 'center',
    marginBottom: screenHeight / 10,
    width: '60%',
    resizeMode: 'contain',
  },
  formContainer: {
    marginBottom: 40,
  },
});
