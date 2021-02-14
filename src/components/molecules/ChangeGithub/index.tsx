import React from 'react';
import { Image, Alert } from 'react-native';

import Touchable from '../../atoms/Touchable';

import { goToHome } from '../../../navigation/navigate';
import { images } from '../../../assets';
import styles from './styles';

const ChangeGithub = () => {
  const confirmChangeAccount = () => {
    Alert.alert(
      'Switch account',
      'Are you sure that you want to switch organization and/or repository?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: goToHome },
      ],
    );
  };

  return (
    <Touchable onPress={confirmChangeAccount}>
      <Image style={styles.image} source={images.swap} />
    </Touchable>
  );
};

export default ChangeGithub;
