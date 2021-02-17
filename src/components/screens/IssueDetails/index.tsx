import React, { useEffect, ReactElement } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import Markdown from 'react-native-markdown-display';

import LoadingIndicator from '../../atoms/LoadingIndicator';
import EmptyState from '../../molecules/EmptyState';

import { formatDate } from '../../../services/date';

import { Colors } from '../../../theme';

import { Props } from './types';
import styles from './styles';

const IssueDetailsScreen: NavigationFunctionComponent<Props> = (props) => {
  const {
    API,
    issue,
    owner,
    repo,
    issueNumber,
    getIssueDetails,
    resetIssue,
  } = props;

  useEffect(() => {
    async function getIssue(
      ownerValue: string,
      repoValue: string,
      number: number,
    ) {
      await getIssueDetails({
        owner: ownerValue,
        repo: repoValue,
        issueNumber: number,
      });
    }

    getIssue(owner, repo, issueNumber);

    return () => resetIssue();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderState = (): ReactElement => {
    const { state } = issue;
    const bgColor =
      state === 'open'
        ? Colors.green
        : state === 'closed'
        ? Colors.red
        : Colors.labelgrey;
    const baseStyle = {
      ...styles.stateBase,
      backgroundColor: bgColor,
    };

    return (
      <View style={baseStyle}>
        <Text style={styles.stateText}>{state}</Text>
      </View>
    );
  };

  if (API.pending) {
    return <LoadingIndicator />;
  }

  if (!Object.keys(issue).length) {
    return <EmptyState text='This issue does not exist' />;
  }

  return (
    <ScrollView contentContainerStyle={styles.base}>
      <Text style={styles.title}>{issue.title}</Text>
      <View style={styles.row}>
        {renderState()}
        <Text style={styles.summary}>
          #{issue.number}, at {formatDate(issue.created_at, 'datetime24')} by{' '}
          {issue.user.login}
        </Text>
      </View>

      <View style={styles.bodyContainer}>
        <Markdown>{issue.body}</Markdown>
      </View>
    </ScrollView>
  );
};

IssueDetailsScreen.options = {
  topBar: {
    title: {
      text: 'Details',
    },
  },
};

export default IssueDetailsScreen;
