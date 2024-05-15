import React, {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Place, RouteResponse, TripDay} from '../../api/types.ts';
import TripDayGroup from './TripDayGroup.tsx';
import WeatherMessage from './WeatherMessage.tsx';
import ListDivider from '../Preferences/ListDivider.tsx';

interface Props {
  route: RouteResponse;
  onPlacePressed: (place: Place) => void;
}

const keyExtractor = (item: TripDay) => item.destinations[0].place.id;

const RouteFull: FC<Props> = ({route, onPlacePressed}) => {
  const renderItem = ({item, index}: {item: TripDay; index: number}) => {
    return (
      <TripDayGroup
        day={item}
        dayNumber={index + 1}
        onPlacePressed={onPlacePressed}
      />
    );
  };

  return (
    <View>
      {route ? <WeatherMessage weatherInfo={route.weatherWarning}></WeatherMessage> : <></>}
      <FlatList
        data={route ? route.tripDays : []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEnabled={false}
        ListFooterComponent={ListDivider}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default React.memo(RouteFull);
