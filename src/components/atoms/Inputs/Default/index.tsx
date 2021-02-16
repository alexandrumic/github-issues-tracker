import React, { FC, forwardRef } from 'react';
import { View, Text } from 'react-native';

import BaseInput from '../Base';

import { Props } from './types';
import styles from './styles';

const DefaultInput: FC<Props> = forwardRef((props, ref) => {
  const { label, errorMessage, ...rest } = props;

  return (
    <View>
      {label && <Text style={styles.label}>{`${label}:`}</Text>}
      <BaseInput baseRef={ref} {...rest} />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
});

export default DefaultInput;
