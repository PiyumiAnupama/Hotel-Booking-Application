import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Colors, parameters} from '../global/styles';
import Swiper from 'react-native-swiper';

export default function Bookings({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 40,
        }}
      />
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 26,
            color: Colors.buttons,
            fontWeight: 'bold',
            marginTop: 100,
          }}>
          Your Bookings live here
        </Text>
      </View>
      
      <View style={{justifyContent: 'flex-end', marginHorizontal: 20}}>
        <View style={styles.slider1}>
          <Image
            source={require('../assets/Images/VectorImages/6.jpg')}
            style={{height: 250, width: 250,marginLeft:50,marginTop:100}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slider1: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
  },

  createButton: {
    alignContent: 'center',
    justifyContent: 'center',

    marginLeft: 40,
    marginBottom: 15,

    height: 50,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: Colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
  text5: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.grey2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
