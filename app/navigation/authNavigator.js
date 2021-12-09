import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignInWelcomScreen from '../screens/authScreens/SignInWelcomScreen';

import HotelMapScreen from '../screens/HotelMapScreen';

import DrawerNavigator from './DrawerNavigator';
import Splash from '../screens/authScreens/WelcomeScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import HotelInfoScreen from '../screens/HotelInfoScreen';
import Info from '../screens/Info';
import MoreInfoScreen from '../screens/MoreInfoScreen';

const Auth = createStackNavigator();

export function AuthStack() {
  return (
    <Auth.Navigator>
     <Auth.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
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
   <Auth.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
       <Auth.Screen
        name="HotelInfoScreen"
        component={HotelInfoScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
       <Auth.Screen
        name="Info"
        component={Info}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
       <Auth.Screen
        name="MoreInfoScreen"
        component={MoreInfoScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}
