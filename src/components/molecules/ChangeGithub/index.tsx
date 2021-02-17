import React from 'react';
import { Image, Alert } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

import Touchable from '../../atoms/Touchable';

import { goToHome } from '../../../navigation/navigate';
import { images } from '../../../assets';

import { Props } from './types';
import styles from './styles';

const ChangeGithub: NavigationFunctionComponent<Props> = ({ reset }) => {
  const goHome = () => {
    reset();
    goToHome();
  };

  const confirmChangeAccount = () => {
    Alert.alert(
      'Switch account',
      'Are you sure that you want to switch organization and/or repository?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: goHome },
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
