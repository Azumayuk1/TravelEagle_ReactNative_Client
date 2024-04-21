import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import PreferencesScreen from '../screens/Preferences/PreferencesScreen.tsx';
import MainStack from './stacks/Main/MainStack.tsx';
import IconExplore from '../components/icons/IconExplore.tsx';
import IconPreferences from '../components/icons/IconPreferences.tsx';
import {StyleSheet} from 'react-native';
import {GlobalTextStyles} from '../globalStyles/globalTextStyles.ts';
import {colors} from '../globalStyles/globalColors.tsx';

const Tab = createBottomTabNavigator();

export enum TabStacks {
  Main = 'Main',
  Preferences = 'Preferences',
}

/**
 * Implements bottom tab navigation.
 *
 */
const TabNavigator: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabStacks.Main}
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.labelStyle,
        tabBarActiveTintColor: colors.generalFontColor,
        tabBarInactiveTintColor: colors.lightOnSurface,
      }}>
      <Tab.Screen
        name={TabStacks.Main}
        component={MainStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Поиск',
          tabBarIcon: IconExplore,
        }}
      />
      <Tab.Screen
        name={TabStacks.Preferences}
        component={PreferencesScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Предпочтения',
          tabBarIcon: IconPreferences,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    ...GlobalTextStyles.labelMedium,
    textAlign: 'center',
    marginBottom: 4,
  },
  tabBar: {
    height: 60,
  },
});

export default TabNavigator;
