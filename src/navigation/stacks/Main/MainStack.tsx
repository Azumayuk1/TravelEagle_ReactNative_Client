import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {FC} from 'react';
import {MainStackScreens} from '../../NavigationScreens.ts';
import MainScreen from '../../../screens/Main/MainScreen.tsx';
import RouteScreen from '../../../screens/Main/RouteScreen.tsx';
import PlaceDetailsScreen from '../../../screens/Main/PlaceDetailsScreen.tsx';
import {Place} from '../../../api/types.ts';

export type MainStackParamsList = {
  [MainStackScreens.MainScreen]: undefined;
  [MainStackScreens.RouteScreen]: {destinationName: string; isSaved: boolean};
  [MainStackScreens.PlaceDetailsScreen]: {place: Place};
};

export type RouteScreenNavProps = NativeStackScreenProps<
  MainStackParamsList,
  MainStackScreens.RouteScreen
>;

export type PlaceDetailsScreenNavProps = NativeStackScreenProps<
  MainStackParamsList,
  MainStackScreens.PlaceDetailsScreen
>;

const MainStackNavigator = createNativeStackNavigator<MainStackParamsList>();

const MainStack: FC = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name={MainStackScreens.MainScreen}
        component={MainScreen}
        options={{headerShown: false}}
      />

      <MainStackNavigator.Screen
        name={MainStackScreens.RouteScreen}
        component={RouteScreen}
        options={{headerShown: true}}
      />

      <MainStackNavigator.Screen
        name={MainStackScreens.PlaceDetailsScreen}
        component={PlaceDetailsScreen}
        options={{headerShown: true}}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainStack;
