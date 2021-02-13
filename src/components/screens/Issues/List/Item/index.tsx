import React, { FC } from 'react';
import { View, Text } from 'react-native';

import { Props } from './types';
import styles from './styles';

const IssueItem: FC<Props> = (props) => {
  const { item } = props;

  return (
    <View style={styles.base}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default IssueItem;
