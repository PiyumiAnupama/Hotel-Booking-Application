import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import HotelMapScreen from '../screens/HotelMapScreen';

import SearchResultScreen from '../screens/SearchResultScreen';
import HotelInfoScreen from '../screens/HotelInfoScreen';
import Info from '../screens/Info';
import MoreInfoScreen from '../screens/MoreInfoScreen';
import Splash from '../screens/authScreens/WelcomeScreen';

const App = createStackNavigator();

export function AppStack() {
  return (
    <App.Navigator>
      <App.Screen
        name="App"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <App.Screen
        name="HotelMapScreen"
        component={HotelMapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="HotelInfoScreen"
        component={HotelInfoScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="Info"
        component={Info}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="MoreInfoScreen"
        component={MoreInfoScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

     
    </App.Navigator>
  );
}
