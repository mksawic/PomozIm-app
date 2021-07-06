import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EventsView from 'views/volunteer/events/Events.view';
import MyEventsView from 'views/volunteer/events/MyEvents.view';
import SettingsView from 'views/volunteer/account/Settings.view';
import EventsTabBar from './EventsTabBar';

const EventsTopTab = createMaterialTopTabNavigator();

const EventsTopTabNavigator = () => (
  <EventsTopTab.Navigator tabBar={props => <EventsTabBar {...props} />}>
    <EventsTopTab.Screen
      options={{tabBarLabel: 'Akcje'}}
      name="Events"
      component={EventsView}
    />
    <EventsTopTab.Screen
      options={{tabBarLabel: 'Biorę Udział'}}
      name="MyEvents"
      component={MyEventsView}
    />
    <EventsTopTab.Screen name="Settings" component={SettingsView} />
  </EventsTopTab.Navigator>
);

export default EventsTopTabNavigator;
