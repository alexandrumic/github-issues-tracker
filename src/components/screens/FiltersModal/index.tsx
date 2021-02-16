import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import * as Animatable from 'react-native-animatable';
import { NavigationFunctionComponent } from 'react-native-navigation';

import Touchable from '../../atoms/Touchable';
import Separator from '../../atoms/ListSeparator';
import PrimaryButton from '../../atoms/Buttons/Primary';

import { Props } from './types';
import styles from './styles';

const FiltersModal: NavigationFunctionComponent<Props> = (props) => {
  const {
    sortFilter,
    stateFilter,
    owner,
    repo,
    setSortFilter,
    setStateFilter,
    getIssues,
  } = props;

  const onApply = () => {
    getIssues({
      owner,
      repo,
      state: stateFilter,
      sort: sortFilter,
    });
    Navigation.dismissModal('FiltersModal');
  };

  return (
    <View style={styles.base}>
      <View style={styles.sortContainer}>
        <Text style={styles.title}>Sort:</Text>
        <View style={styles.row}>
          <Touchable
            style={[
              styles.radioContainer,
              sortFilter === 'created' && styles.activeContainer,
            ]}
            onPress={() => setSortFilter('created')}>
            <Text
              style={sortFilter === 'created' && styles.activeContainerText}>
              Created
            </Text>
          </Touchable>
          <Touchable
            style={[
              styles.radioContainer,
              sortFilter === 'updated' && styles.activeContainer,
            ]}
            onPress={() => setSortFilter('updated')}>
            <Text
              style={sortFilter === 'updated' && styles.activeContainerText}>
              Updated
            </Text>
          </Touchable>
          <Touchable
            style={[
              styles.radioContainer,
              sortFilter === 'comments' && styles.activeContainer,
            ]}
            onPress={() => setSortFilter('comments')}>
            <Text
              style={sortFilter === 'comments' && styles.activeContainerText}>
              Comments
            </Text>
          </Touchable>
        </View>
      </View>
      <Separator sizeHorizontal='100%' horizontalLine />
      <View style={styles.filterContainer}>
        <Text style={styles.title}>Show:</Text>
        <View style={styles.row}>
          <Touchable
            style={[
              styles.radioContainer,
              stateFilter === 'all' && styles.activeContainer,
            ]}
            onPress={() => setStateFilter('all')}>
            <Text style={stateFilter === 'all' && styles.activeContainerText}>
              All
            </Text>
          </Touchable>
          <Touchable
            style={[
              styles.radioContainer,
              stateFilter === 'open' && styles.activeContainer,
            ]}
            onPress={() => setStateFilter('open')}>
            <Text style={stateFilter === 'open' && styles.activeContainerText}>
              Open
            </Text>
          </Touchable>
          <Touchable
            style={[
              styles.radioContainer,
              stateFilter === 'closed' && styles.activeContainer,
            ]}
            onPress={() => setStateFilter('closed')}>
            <Text
              style={stateFilter === 'closed' && styles.activeContainerText}>
              Closed
            </Text>
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
