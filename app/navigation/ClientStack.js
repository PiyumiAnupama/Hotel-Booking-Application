import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreem';

import Homescreen from '../screens/Homescreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import SearchResultScreen from '../screens/SearchResultScreen';
import HotelInfoScreen from '../screens/HotelInfoScreen';
import Info from '../screens/Info';

import DetailScreen from '../screens/DetailScreen';
import ThankYouScreen from '../screens/ThankYouScreen';

const ClientSearch = createStackNavigator();

export function ClientStack({navigation, route}) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Homescreen' || 'MenuProductScreen') {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name="SearchScreem"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="Info"
        component={Info}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="Homescreen"
        component={Homescreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="HotelInfoScreen"
        component={HotelInfoScreen}
        options={() => ({
          headerShown: false,
        })}
      />
     
       <ClientSearch.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={() => ({
          headerShown: false,
        })}
      />
       <ClientSearch.Screen
        name="ThankYouScreen"
        component={ThankYouScreen}
        options={() => ({
          headerShown: false,
        })}
      />
       
   

    </ClientSearch.Navigator>
  );
}
