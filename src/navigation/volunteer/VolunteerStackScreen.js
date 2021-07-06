import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginView from 'views/volunteer/account/Login.view';
import RegisterView from 'views/volunteer/account/Register.view';
import EventsTopTabNavigator from './EventsTopTabNavigator';
import EventDetails from 'views/volunteer/events/EventDetails.view';
import {AuthContext} from 'services/auth/Login.context';

const VolunteerStack = createStackNavigator();

const VolunteerStackScreen = () => {
  const {user} = useContext(AuthContext);

  return (
    <VolunteerStack.Navigator headerMode="none">
      {user ? (
        <>
          <VolunteerStack.Screen
            name="Volunteer"
            component={EventsTopTabNavigator}
          />
          <VolunteerStack.Screen name="EventDetails" component={EventDetails} />
        </>
      ) : (
        <>
          <VolunteerStack.Screen name="Login" component={LoginView} />
          <VolunteerStack.Screen name="Register" component={RegisterView} />
        </>
      )}
    </VolunteerStack.Navigator>
  );
};

export default VolunteerStackScreen;
