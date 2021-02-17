import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

import ListSeparator from '../../../atoms/ListSeparator';
import EmptyState from '../../../molecules/EmptyState';
import Item from '../List/Item';

import { ITEM_HEIGHT } from '../List/Item/styles';

import { IssueInterface } from '../../../../redux/issues/types';

import { Props } from './types';
import styles from './styles';

const FavouritesIssuesScreen: NavigationFunctionComponent<Props> = (props) => {
  const { favouritesIssuesList, favouritesIssuesIDs, toggleFavourite } = props;

  const getDefaultItemLayout = (_: any, index: number) => {
    return {
      length: ITEM_HEIGHT,
      offset: (ITEM_HEIGHT + 10) * index,
      index,
    };
  };

  const extractKey = (item: IssueInterface) => `${item.id}`;

  const renderItem = ({ item }: { item: IssueInterface }): ReactElement => {
    return (
      <Item
        item={item}
        favouritesIssues={favouritesIssuesIDs}
        toggleFavourite={toggleFavourite}
      />
    );
  };

  const renderSeparator = (): ReactElement => (
    <ListSeparator sizeHorizontal='100%' horizontalLine />
  );

  const renderEmpty = (): ReactElement => (
    <EmptyState text='There are no issues added in favourites' />
  );

  return (
    <FlatList
      contentContainerStyle={styles.content}
      data={favouritesIssuesList}
      renderItem={renderItem}
      keyExtractor={extractKey}
      ListEmptyComponent={renderEmpty}
      ItemSeparatorComponent={renderSeparator}
      getItemLayout={getDefaultItemLayout}
    />
  );
};

export default FavouritesIssuesScreen;
