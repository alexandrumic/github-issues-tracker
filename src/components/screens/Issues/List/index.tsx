import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';

const IssuesListScreen: NavigationFunctionComponent = (props) => {
  const goToIssueDetails = () => {
    Navigation.push(props.componentId, {
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

export default IssuesListScreen;
