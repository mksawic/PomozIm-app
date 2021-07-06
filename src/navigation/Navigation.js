import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from 'styles/theme';
import ROUTES from './Routes';

const tabBarOptions = insets => ({
  activeTintColor: theme.colors.primary,
  inactiveTintColor: theme.colors.gray,
  labelPosition: 'below-icon',
  labelStyle: {
    fontFamily: theme.fonts.body,
    fontSize: 14
  },
  style: {
    paddingBottom: 4,
    paddingTop: 4,
    height: 60,
    marginBottom: insets.bottom
  }
});

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initailRouteName={ROUTES.news.name}
        tabBarOptions={tabBarOptions(insets)}>
        {Object.values(ROUTES).map(route => (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{tabBarIcon: route.icon, title: route.title}}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
