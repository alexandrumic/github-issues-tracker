import React, { FC, forwardRef } from 'react';

import BaseButton from '../Base';

import { Props } from './types';
import styles from './styles';

const PrimaryButton: FC<Props> = forwardRef((props, ref) => {
  return (
    <BaseButton
      style={styles.base}
      textStyle={styles.text}
      baseRef={ref}
      {...props}
    />
  );
});

export default PrimaryButton;
