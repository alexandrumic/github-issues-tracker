import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { Props } from './types';
import styles from './styles';

const BaseButton: FC<Props> = ({
  baseRef,
  isDisabled,
  text,
  style,
  textStyle,
  ...rest
}) => {
  const baseStyle = [styles.base, isDisabled && styles.disabled, style];

  return (
    <TouchableOpacity
      ref={baseRef}
      style={baseStyle}
      disabled={isDisabled}
      activeOpacity={0.8}
      {...rest}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BaseButton;
