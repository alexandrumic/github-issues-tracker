import React, { FC, forwardRef } from 'react';
import { View, Text } from 'react-native';

import BaseInput from '../Base';

import { Props } from './types';
import styles from './styles';

const DefaultInput: FC<Props> = forwardRef((props, ref) => {
  const { label, ...rest } = props;

  return (
    <View style={styles.base}>
      {label && <Text style={styles.label}>{`${label}:`}</Text>}
      <BaseInput baseRef={ref} {...rest} />
    </View>
  );
});

export default DefaultInput;
