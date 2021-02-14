import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const screenWidth = width;
const screenHeight = height;

const metrics = {
  screenWidth,
  screenHeight,
};

export { screenWidth, screenHeight };

export default metrics;
