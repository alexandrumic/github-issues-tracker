import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';

import { goToHome, openFiltersModal } from '../../../../navigation/navigate';

const IssuesListScreen: NavigationFunctionComponent = () => {
  const goToIssueDetails = () => {
    Navigation.push('IssuesStack', {
      component: {
        name: 'IssueDetails',
      },
    });
  };

  return (
    <View style={styles.base}>
      <Text style={styles.text}>Issues List Screen</Text>
      <Pressable onPress={goToIssueDetails}>
        <Text>See Issue Details</Text>
      </Pressable>

      <Pressable onPress={goToHome}>
        <Text>Go back home</Text>
      </Pressable>

      <Pressable onPress={openFiltersModal}>
        <Text>Open modal</Text>
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
    marginBottom: 20,
  },
});

export default IssuesListScreen;
