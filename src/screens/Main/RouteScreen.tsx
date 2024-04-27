import {FC, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../globalStyles/globalColors.tsx';
import {RouteScreenNavProps} from '../../navigation/stacks/Main/MainStack.tsx';
import {mockedResponseSaintPetersburg} from '../../mockedData/mockedApi.ts';
import RouteFull from '../../components/Route/RouteFull.tsx';
import {MainStackScreens} from '../../navigation/NavigationScreens.ts';
import {Place} from '../../api/types.ts';

const RouteScreen: FC<RouteScreenNavProps> = ({route, navigation}) => {
  const {destinationName, isSaved} = route.params;

  // Setting the city name in the header
  useEffect(() => {
    navigation.setOptions({
      headerTitle: destinationName,
    });
  }, [navigation, destinationName]);

  const navigateToPlaceDetails = (place: Place) => {
    // TODO
    navigation.navigate(MainStackScreens.PlaceDetailsScreen, {place: place});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RouteFull
          route={mockedResponseSaintPetersburg}
          onPlacePressed={navigateToPlaceDetails}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.screenBackground,
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: 'column',
  },
});

export default RouteScreen;
