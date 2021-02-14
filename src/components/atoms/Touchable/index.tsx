import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { Props } from './types';

const Touchable: FC<Props> = (props) => {
  const { children, onPress, activeOpacity = 0.8, ...rest } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={!onPress ? 1 : activeOpacity}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
