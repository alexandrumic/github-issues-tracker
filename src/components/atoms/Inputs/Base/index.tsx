import React, { FC } from 'react';
import { TextInput } from 'react-native';

import { Colors } from '../../../../theme';

import { Props } from './types';
import styles from './styles';

const BaseInput: FC<Props> = ({
  baseRef,
  isDisabled,
  textStyle,
  isError,
  ...rest
}) => {
  const baseStyle = [
    styles.base,
    isDisabled && styles.disabled,
    isError && styles.error,
    textStyle,
  ];

  return (
    <TextInput
      ref={baseRef}
      style={baseStyle}
      editable={!isDisabled}
      placeholderTextColor={Colors.darkgrey}
      {...rest}
    />
  );
};

export default BaseInput;
