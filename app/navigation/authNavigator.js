import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignInWelcomScreen from '../screens/authScreens/SignInWelcomScreen';

import HotelMapScreen from '../screens/HotelMapScreen';

import RootBottomTab from './BottomBar';
import DrawerNavigator from './DrawerNavigator';

const Auth = createStackNavigator();

export function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

<Auth.Screen
        name="HotelMapScreen"
        component={HotelMapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}
