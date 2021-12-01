import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {Colors} from '../../global/styles';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('SignInWelcomeScreen');
  }, 3000);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.buttons,
      }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#465bd8"
      />
    
      <Text
        style={{
          fontFamily: 'OpenSans-Bold',
          fontSize: 40,
          color: 'white',
          fontWeight:'bold',
        }}>
        Hotel Booking
      </Text>
    </View>
  );
};

export default Splash;


