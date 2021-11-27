import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors} from '../global/styles';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import Bookings from '../screens/Bookings';
import MyAccount from '../screens/MyAccount';

const BottomTab = createBottomTabNavigator();

export default function RootBottomTab() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.buttons,
      }}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
