import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import {MainStackScreens} from '../../NavigationScreens.ts';
import MainScreen from '../../../screens/Main/MainScreen.tsx';

const MainStackNavigator = createNativeStackNavigator();

const MainStack: FC = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name={MainStackScreens.MainScreen}
        component={MainScreen}
        options={{headerShown: false}}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainStack;
