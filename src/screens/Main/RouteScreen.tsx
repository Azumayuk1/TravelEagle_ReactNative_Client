import {FC, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../globalStyles/globalColors.tsx';
import {RouteScreenNavProps} from '../../navigation/stacks/Main/MainStack.tsx';
import RouteFull from '../../components/Route/RouteFull.tsx';
import {MainStackScreens} from '../../navigation/NavigationScreens.ts';
import {Place} from '../../api/types.ts';
import useTravelEagleRoute from '../../api/useTravelEagleRoute.ts';
import RoutePlaceholder from '../../components/Route/RoutePlaceholder.tsx';

const RouteScreen: FC<RouteScreenNavProps> = ({route, navigation}) => {
  const {destinationName, isSaved, dateStart, dateEnd} = route.params;

  const {routeInfo, isRouteLoading, error} = useTravelEagleRoute(destinationName);

  // Setting the city name in the header
  useEffect(() => {
    navigation.setOptions({
      headerTitle: destinationName,
    });
  }, [navigation, destinationName]);

  const navigateToPlaceDetails = (place: Place) => {
    navigation.navigate(MainStackScreens.PlaceDetailsScreen, {place: place});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isRouteLoading ? (
          <RoutePlaceholder />
        ) : (
          <RouteFull
            route={routeInfo!!}
            onPlacePressed={navigateToPlaceDetails}
          />
        )}
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
