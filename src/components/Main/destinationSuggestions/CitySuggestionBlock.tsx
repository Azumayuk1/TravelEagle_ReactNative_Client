import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CitySuggestion} from '../../../dataTypes/citySuggestions.ts';
import {colors} from '../../../globalStyles/globalColors.tsx';
import {GlobalTextStyles} from '../../../globalStyles/globalTextStyles.ts';
import CitySuggestionItem from './CitySuggestion.tsx';

interface Props {
  title: string;
  citySuggestionsList: CitySuggestion[];
}

const keyExtractor = (item: CitySuggestion) => item.cityName;

const CitySuggestionBlock: FC<Props> = ({title, citySuggestionsList}) => {
  const renderItem = ({item}: {item: CitySuggestion}) => {
    return <CitySuggestionItem suggestion={item} onPress={() => {}} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <FlatList
        data={citySuggestionsList}
        renderItem={renderItem}
        horizontal={true}
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.lightSurface,
    borderRadius: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: colors.secondaryContainer,
  },
  titleText: {
    ...GlobalTextStyles.titleMedium,
    color: colors.generalFontColor,
    marginLeft: 16,
  },
  list: {
    marginTop: 12,
  },
});

export default React.memo(CitySuggestionBlock);
