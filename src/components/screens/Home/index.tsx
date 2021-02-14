import React from 'react';
import { View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DefaultInput from '../../atoms/Inputs/Default';
import PrimaryButton from '../../atoms/Buttons/Primary';
import Separator from '../../atoms/ListSeparator';

import { goToIssues } from '../../../navigation/navigate';

import { images } from '../../../assets';

import styles from './styles';

const HomeScreen = () => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.base}>
      <Image style={styles.image} source={images.octoCat} />
      <View style={styles.formContainer}>
        <DefaultInput label='Organisation' placeholder='facebook' />
        <Separator size={20} />
        <DefaultInput label='Repository' placeholder='react-native' />
      </View>

      <PrimaryButton onPress={goToIssues} text='Search' />
    </KeyboardAwareScrollView>
  );
};

export default HomeScreen;
