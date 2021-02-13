import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import { goToIssues } from '../../../navigation/navigate';

const HomeScreen = () => {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>Home Screen</Text>
      <Pressable onPress={goToIssues}>
        <Text>Go to issues</Text>
      </Pressable>
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

export default HomeScreen;
