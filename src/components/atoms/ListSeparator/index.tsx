import React, { FC } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

import { condApply } from '../../../utils/object';

import { Props } from './types';
import styles from './styles';

const ListSeparator: FC<Props> = ({
  size,
  sizeHorizontal,
  sizeVertical,
  verticalLine,
  horizontalLine,
  isHidden,
}) => {
  if (isHidden) {
    return null;
  }

  const baseStyle: StyleProp<ViewStyle> = {
    ...styles.base,
    ...condApply(size, {
      width: size,
      height: size,
    }),
    ...condApply(sizeHorizontal, {
      width: sizeHorizontal,
    }),
    ...condApply(sizeVertical, {
      height: sizeVertical,
    }),
  };

  return (
    <View style={baseStyle}>
      <View style={verticalLine && styles.verticalLine} />
      <View style={horizontalLine && styles.horizontalLine} />
    </View>
  );
};

export default ListSeparator;
