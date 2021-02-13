import React, { ReactElement, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import {
  // Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';

// import { goToHome, openFiltersModal } from '../../../../navigation/navigate';

import { ITEM_HEIGHT } from './Item/styles';
import Item from './Item';

import { IssueInterface } from '../../../../redux/issues/types';
import { Props } from './types';
import styles from './styles';

const IssuesListScreen: NavigationFunctionComponent<Props> = (props) => {
  const { issues } = props;

  useEffect(() => {
    async function getData(owner: string, repo: string) {
      await props.getIssues({ owner, repo });
    }

    getData('Nozbe', 'WatermelonDB');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const goToIssueDetails = () => {
  //   Navigation.push('IssuesStack', {
  //     component: {
  //       name: 'IssueDetails',
  //     },
  //   });
  // };

  const getDefaultItemLayout = (_: any, index: number) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    };
  };

  const extractKey = (item: IssueInterface) => `${item.id}`;

  const renderItem = ({ item }: { item: IssueInterface }): ReactElement => <Item item={item} />;

  const renderSeparator = (): ReactElement => <View style={styles.separator} />;

  const renderEmpty = (): ReactElement => {
    return (
      <View>
        <Text>No data 😢</Text>
      </View>
    );
  };

  return (
    <View style={styles.base}>
      <FlatList
        data={issues.data}
        renderItem={renderItem}
        keyExtractor={extractKey}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
        getItemLayout={getDefaultItemLayout}
      />
    </View>
  );
};

export default IssuesListScreen;
