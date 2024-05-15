import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Place} from '../../api/types.ts';
import {colors} from '../../globalStyles/globalColors.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';
import {entertainmentMap} from '../../api/placeTypesDefinitions.ts';
import IconStar from '../icons/IconStar.tsx';
import IconLike from '../icons/IconLike.tsx';

interface Props {
  place: Place;
  onPlacePressed: (place: Place) => void;
  isEatery: boolean;
}

const PlaceCard: FC<Props> = ({place, onPlacePressed, isEatery}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPlacePressed(place)}>
      <View style={styles.textsContainer}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {isEatery ? 'Ресторан поблизости' : place.name}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {isEatery ? place.name : entertainmentMap.get(place.purpose_name) || 'Место'}
        </Text>

        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <IconStar />
            <Text style={styles.ratingText} numberOfLines={1}>
              {place.general_rating + ' (' + place.general_review_count + ')'}
            </Text>
          </View>

          <View style={styles.likes}>
            <IconLike />
            <Text style={styles.ratingText} numberOfLines={1}>
              {place.likes}
            </Text>
          </View>
        </View>
      </View>

      <Image source={{uri: place.image}} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    marginHorizontal: 6,
    height: 100,
    backgroundColor: colors.lightSurface,
    justifyContent: 'space-between',
    borderColor: colors.secondaryContainer,
    borderWidth: 1,
    width: '100%',
    alignSelf: 'center',
  },
  textsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '80%'
  },
  image: {
    resizeMode: 'cover',
    width: '20%',
    height: 100,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
  },
  cardTitle: {
    ...GlobalTextStyles.titleMedium,
    color: colors.generalFontColor,
  },
  subtitle: {
    marginTop: 6,
    ...GlobalTextStyles.bodyMedium,
    color: colors.generalFontColor,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    maxWidth: '80%',
  },
  rating: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  likes: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
  },
  ratingText: {
    ...GlobalTextStyles.labelSmall,
    color: colors.secondary,
    marginLeft: 4,
  },
});

export default React.memo(PlaceCard);
