import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import * as Animatable from 'react-native-animatable';

import Touchable from '../../atoms/Touchable';
import Separator from '../../atoms/ListSeparator';
import PrimaryButton from '../../atoms/Buttons/Primary';

import styles from './styles';

const FiltersModal = () => {
  const onApply = () => {
    Navigation.dismissModal('FiltersModal');
  };

  return (
    <View style={styles.base}>
      <View style={styles.sortContainer}>
        <Text style={styles.title}>Sort:</Text>
        <View style={styles.row}>
          <Touchable style={[styles.radioContainer, styles.activeContainer]}>
            <Text style={styles.activeContainerText}>Date created asc</Text>
          </Touchable>
          <Touchable style={styles.radioContainer}>
            <Text style={styles.radioText}>Date created des</Text>
          </Touchable>
          <Touchable style={styles.radioContainer}>
            <Text>Date updated asc</Text>
          </Touchable>
          <Touchable style={styles.radioContainer}>
            <Text>Date updated des</Text>
          </Touchable>
          <Touchable style={styles.radioContainer}>
            <Text>Comments asc</Text>
          </Touchable>
          <Touchable style={styles.radioContainer}>
            <Text>Comments des</Text>
          </Touchable>
        </View>
      </View>
      <Separator sizeHorizontal='100%' horizontalLine />
      <View style={styles.filterContainer}>
        <Text style={styles.title}>Show:</Text>
        <View style={styles.row}>
          <Touchable style={styles.radioContainer}>
            <Text>All</Text>
          </Touchable>
          <Touchable style={styles.radioContainer}>
            <Text>Open</Text>
          </Touchable>
          <Touchable style={styles.radioContainer}>
            <Text>Closed</Text>
          </Touchable>
        </View>
      </View>

      <Animatable.View
        style={styles.buttonContainer}
        animation='slideInUp'
        duration={300}
        delay={300}>
        <PrimaryButton onPress={onApply} text='Filter' />
      </Animatable.View>
    </View>
  );
};

export default FiltersModal;
