import React, { SFC } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Colors } from '../../../theme';

import { Props } from './types';
import styles from './styles';

const LoadingIndicator: SFC<Props> = ({ baseStyle, size, color }) => {
  return (
    <View style={[styles.base, baseStyle]}>
      <ActivityIndicator size={size} color={color || Colors.labelgrey} />
    </View>
  );
};

export default LoadingIndicator;
