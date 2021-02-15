// @ts-nocheck
import React, { useRef } from 'react';
import { View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm, Controller } from 'react-hook-form';
import { NavigationFunctionComponent } from 'react-native-navigation';

import DefaultInput from '../../atoms/Inputs/Default';
import PrimaryButton from '../../atoms/Buttons/Primary';
import Separator from '../../atoms/ListSeparator';

import { goToIssues } from '../../../navigation/navigate';

import { images } from '../../../assets';

import { Props } from './types';
import styles from './styles';

const HomeScreen: NavigationFunctionComponent<Props> = (props) => {
  const { control, errors, handleSubmit, setValue } = useForm();
  const ownerInputRef = useRef(null);
  const repoInputRef = useRef(null);

  const onSubmit = (data: { owner: string; repo: string }) => {
    const { owner, repo } = data;
    props.setOwner(owner);
    props.setRepo(repo);
    goToIssues();
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.base}>
      <Image style={styles.image} source={images.octoCat} />
      <View style={styles.formContainer}>
        <Controller
          name='owner'
          control={control}
          rules={{ required: 'This field is required' }}
          defaultValue=''
          onFocus={() => ownerInputRef.current.focus()}
          render={() => (
            <DefaultInput
              ref={ownerInputRef}
              label='Organisation'
              placeholder='facebook'
              isError={!!errors.owner}
              errorMessage={
                errors.owner && errors.owner.message && errors.owner.message
              }
              returnKeyType='next'
              onBlur={() => repoInputRef.current.focus()}
              onChangeText={(text) => setValue('owner', text)}
            />
          )}
        />
        <Separator size={20} />
        <Controller
          name='repo'
          control={control}
          rules={{ required: 'This field is required' }}
          defaultValue=''
          onFocus={() => repoInputRef.current.focus()}
          render={() => (
            <DefaultInput
              ref={repoInputRef}
              label='Repository'
              placeholder='react-native'
              isError={!!errors.repo}
              errorMessage={
                errors.repo && errors.repo.message && errors.repo.message
              }
              returnKeyType='done'
              onChangeText={(text) => setValue('repo', text)}
            />
          )}
        />
      </View>

      <PrimaryButton onPress={handleSubmit(onSubmit)} text='Search' />
    </KeyboardAwareScrollView>
  );
};

export default HomeScreen;
