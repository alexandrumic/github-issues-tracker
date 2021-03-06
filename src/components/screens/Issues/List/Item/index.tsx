import React, { FC, ReactElement } from 'react';
import { View, Text, Image } from 'react-native';

import Touchable from '../../../../atoms/Touchable';

import { formatDate } from '../../../../../services/date';
import { icons, images } from '../../../../../assets';
import { Colors } from '../../../../../theme';

import { Props } from './types';
import styles from './styles';

const IssueItem: FC<Props> = (props) => {
  const { item, favouritesIssues, toggleFavourite } = props;

  const renderState = (): ReactElement => {
    const { state } = item;
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

  const toggleItemAsFavourite = (itemID: number): void => {
    toggleFavourite(itemID);
  };

  const getFavIcon = () =>
    favouritesIssues.includes(item.id)
      ? icons.starBlack
      : icons.starBlackOutline;

  return (
    <View style={styles.base}>
      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.date}>{formatDate(item.updated_at)}</Text>
      </View>
      <View style={styles.row}>
        {renderState()}
        <View style={styles.commentsContainer}>
          <Image style={styles.commentsIcon} source={images.comments} />
          <View style={styles.commentsNoContainer}>
            <Text style={styles.commentsNo}>{item.comments}</Text>
          </View>
        </View>
        <Touchable
          onPress={() => toggleItemAsFavourite(item.id)}
          hitSlop={styles.hitSlop}>
          <Image style={styles.favIcon} source={getFavIcon()} />
        </Touchable>
      </View>
      <Text style={styles.summary}>
        #{item.number} opened at {formatDate(item.created_at, 'datetime24')} by{' '}
        {item.user.login}
      </Text>
    </View>
  );
};

export default IssueItem;
