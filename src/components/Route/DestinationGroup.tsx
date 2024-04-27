import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Destination, Place} from '../../api/types.ts';
import PlaceCard from './PlaceCard.tsx';
import TripTimeDivider from './TripTimeDivider.tsx';
import ListDivider from '../Preferences/ListDivider.tsx';

interface Props {
  destination: Destination;
  onPlacePressed: (place: Place) => void;
}

const DestinationGroup: FC<Props> = ({destination, onPlacePressed}) => {
  return (
    <View>
      <TripTimeDivider travelTime={destination.travelTime} />
      <ListDivider />
      <PlaceCard
        place={destination.place}
        onPlacePressed={onPlacePressed}
        isEatery={false}
      />
      <ListDivider />
      <PlaceCard
        place={destination.eatery}
        onPlacePressed={onPlacePressed}
        isEatery={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default React.memo(DestinationGroup);
