import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const IssueDetailsScreen = () => {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>Issues Details Screen</Text>
    </View>
  );
};

IssueDetailsScreen.options = {
  topBar: {
    title: {
      text: 'Details',
    },
  },
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

export default IssueDetailsScreen;
