import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PlaceholderWithShimmer from './PlaceholderWithShimmer.tsx';
import {colors} from '../../globalStyles/globalColors.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';

const RoutePlaceholder: FC = ({}) => {
  return (
    <>
      <Text style={styles.pageTitle}>Составляем маршрут...</Text>
      <View style={styles.cardContainer}>
        <PlaceholderWithShimmer style={styles.title} />
        <PlaceholderWithShimmer style={styles.image} />
      </View>
      <View style={styles.cardContainer}>
        <PlaceholderWithShimmer style={styles.title} />
        <PlaceholderWithShimmer style={styles.image} />
      </View>
      <View style={styles.cardContainer}>
        <PlaceholderWithShimmer style={styles.title} />
        <PlaceholderWithShimmer style={styles.image} />
      </View>
      <View style={styles.cardContainer}>
        <PlaceholderWithShimmer style={styles.title} />
        <PlaceholderWithShimmer style={styles.image} />
      </View>
      <View style={styles.cardContainer}>
        <PlaceholderWithShimmer style={styles.title} />
        <PlaceholderWithShimmer style={styles.image} />
      </View>
      <View style={styles.cardContainer}>
        <PlaceholderWithShimmer style={styles.title} />
        <PlaceholderWithShimmer style={styles.image} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    marginVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.screenBackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 95,
    borderColor: colors.secondaryContainer,
    borderWidth: 1,
  },
  title: {
    alignSelf: 'center',
    width: 150,
    borderRadius: 12,
    height: 20,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 12,
    alignSelf: 'center',
  },
  pageTitle: {
    ...GlobalTextStyles.titleMedium,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 6,
  },
});

export default RoutePlaceholder;
