import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FiltersModal = () => {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>Filters Modal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default FiltersModal;
