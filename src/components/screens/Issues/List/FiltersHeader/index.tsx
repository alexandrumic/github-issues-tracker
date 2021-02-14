import React from 'react';
import { View, Text, Image } from 'react-native';

import Touchable from '../../../../atoms/Touchable';
import Separator from '../../../../atoms/ListSeparator';

import { openFiltersModal } from '../../../../../navigation/navigate';
import { images } from '../../../../../assets';

import styles from './styles';

const FiltersHeader = () => {
  return (
    <View style={styles.base}>
      <Touchable style={styles.button} onPress={openFiltersModal}>
        <Image style={styles.icon} source={images.sort} />
        <Text style={styles.text}>Sort</Text>
      </Touchable>
      <Separator sizeVertical={40} verticalLine />
      <Touchable style={styles.button} onPress={openFiltersModal}>
        <Image style={styles.icon} source={images.filter} />
        <Text style={styles.text}>Filter</Text>
      </Touchable>
    </View>
  );
};

export default FiltersHeader;
