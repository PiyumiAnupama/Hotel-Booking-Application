import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignInWelcomScreen from '../screens/authScreens/SignInWelcomScreen';


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
    </Auth.Navigator>
  );
}
