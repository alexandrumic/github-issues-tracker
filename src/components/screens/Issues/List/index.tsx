import React, { ReactElement, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';

import ListSeparator from '../../../atoms/ListSeparator';
import Touchable from '../../../atoms/Touchable';
import LoadingIndicator from '../../../atoms/LoadingIndicator';
import EmptyState from '../../../molecules/EmptyState';

import { goToHome } from '../../../../navigation/navigate';

import { Colors } from '../../../../theme';

import Item from './Item';
import FiltersHeader from './FiltersHeader';
import { ITEM_HEIGHT } from './Item/styles';

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

  const goToIssueDetails = () => {
    Navigation.push('IssuesStack', {
      component: {
        name: 'IssueDetails',
      },
    });
  };

  const getDefaultItemLayout = (_: any, index: number) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    };
  };

  const extractKey = (item: IssueInterface) => `${item.id}`;

  const renderItem = ({ item }: { item: IssueInterface }): ReactElement => {
    return (
      <Touchable onPress={goToIssueDetails}>
        <Item item={item} />
      </Touchable>
    );
  };

  const renderSeparator = (): ReactElement => (
    <ListSeparator sizeHorizontal='100%' horizontalLine />
  );

  const renderEmpty = (): ReactElement => (
    <EmptyState onPress={goToHome} text='There are no issues found' />
  );

  if (issues.initialLoad) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.base}>
      <FiltersHeader />
      <FlatList
        contentContainerStyle={styles.content}
        data={issues.data}
        renderItem={renderItem}
        keyExtractor={extractKey}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
        getItemLayout={getDefaultItemLayout}
        refreshing={issues.api.pending}
      />
    </View>
  );
};

IssuesListScreen.options = () => {
  return {
    topBar: {
      rightButtonColor: Colors.white,
      rightButtons: [
        {
          id: 'ChangeGithub',
          component: {
            name: 'ChangeGithub',
          },
        },
      ],
    },
  };
};

export default IssuesListScreen;
