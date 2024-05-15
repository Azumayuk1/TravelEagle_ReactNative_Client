import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Destination, Place, TripDay} from '../../api/types.ts';
import DestinationGroup from './DestinationGroup.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';
import {colors} from '../../globalStyles/globalColors.tsx';

interface Props {
  day: TripDay;
  dayNumber: number;
  onPlacePressed: (place: Place) => void;
}

const keyExtractor = (item: Destination) => item.place.id;

const TripDayGroup: FC<Props> = ({day, dayNumber, onPlacePressed}) => {
  const renderItem = ({item}: {item: Destination}) => {
    return (
      <DestinationGroup destination={item} onPlacePressed={onPlacePressed} />
    );
  };

  return (
    <View>
      <Text style={styles.dayText}>{'День ' + dayNumber}</Text>
      <FlatList
        data={day.destinations}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dayText: {
    ...GlobalTextStyles.titleMedium,
    color: colors.generalFontColor,
    marginTop: 16,
  },
});

export default React.memo(TripDayGroup);
