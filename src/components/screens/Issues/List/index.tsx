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
  const { issues, owner, repo, stateFilter, sortFilter } = props;

  useEffect(() => {
    async function getData(ownerValue: string, repoValue: string) {
      await props.getIssues({ owner: ownerValue, repo: repoValue });
    }

    getData(owner, repo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = () => {
    const { api, loadMoreAPI, meta } = issues;

    if (!loadMoreAPI.pending && api.success) {
      props.loadMore(meta);
    }
  };

  const onRefresh = () => {
    props.getIssues({
      owner,
      repo,
      state: stateFilter,
      sort: sortFilter,
    });
  };

  const goToIssueDetails = (issueNumber: number) => {
    Navigation.push('IssuesStack', {
      component: {
        name: 'IssueDetails',
        passProps: {
          issueNumber,
        },
      },
    });
  };

  const getDefaultItemLayout = (_: any, index: number) => {
    return {
      length: ITEM_HEIGHT,
      offset: (ITEM_HEIGHT + 10) * index,
      index,
    };
  };

  const tryAgain = () => {
    props.reset();
    goToHome();
  };

  const extractKey = (item: IssueInterface) => `${item.id}`;

  const renderItem = ({ item }: { item: IssueInterface }): ReactElement => {
    return (
      <Touchable onPress={() => goToIssueDetails(item.number)}>
        <Item
          item={item}
          favouritesIssues={props.favouritesIssues}
          toggleFavourite={props.toggleFavourite}
        />
      </Touchable>
    );
  };

  const renderSeparator = (): ReactElement => (
    <ListSeparator sizeHorizontal='100%' horizontalLine />
  );

  const renderEmpty = (): ReactElement => (
    <EmptyState
      onPress={tryAgain}
      text='There are no issues found or invalid Organization/Repository'
    />
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
        onEndReached={loadMore}
        onEndReachedThreshold={0.7}
        onRefresh={onRefresh}
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
