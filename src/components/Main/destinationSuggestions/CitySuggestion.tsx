import React, {FC} from 'react';
import {CitySuggestion} from '../../../dataTypes/citySuggestions.ts';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GlobalTextStyles} from '../../../globalStyles/globalTextStyles.ts';
import {colors} from '../../../globalStyles/globalColors.tsx';

interface Props {
  suggestion: CitySuggestion;
  onPress: (cityName: string) => void;
}

const CitySuggestionItem: FC<Props> = ({suggestion, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(suggestion.cityName)}>
      <View style={styles.textsContainer}>
        <Text style={styles.cityName} numberOfLines={1}>
          {suggestion.cityName}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {suggestion.subtitle}
        </Text>
      </View>

      <Image source={{uri: suggestion.imgUri}} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    marginHorizontal: 6,
    height: 60,
    backgroundColor: colors.tertiaryContainer,
  },
  textsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    resizeMode: 'cover',
    width: 80,
    height: 60,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
  },
  cityName: {
    ...GlobalTextStyles.labelMedium,
    color: colors.generalFontColor,
  },
  subtitle: {
    marginTop: 6,
    ...GlobalTextStyles.labelSmall,
    color: colors.generalFontColor,
  },
});

export default React.memo(CitySuggestionItem);
