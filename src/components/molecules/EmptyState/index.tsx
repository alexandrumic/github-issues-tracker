import React, { FC } from 'react';
import { View, Image, Text } from 'react-native';

import PrimaryButton from '../../atoms/Buttons/Primary';

import { images } from '../../../assets';

import { Props } from './types';
import styles from './styles';

const EmptyState: FC<Props> = ({ text, buttonText, onPress }) => (
  <View style={styles.base}>
    <Image style={styles.image} source={images.octoCatSad} />
    <Text style={styles.text}>{text}</Text>
    <PrimaryButton onPress={onPress} text={buttonText || 'Try again'} />
  </View>
);

export default EmptyState;
