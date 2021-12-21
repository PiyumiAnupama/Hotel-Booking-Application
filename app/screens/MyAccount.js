import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Colors, parameters} from '../global/styles';
import Swiper from 'react-native-swiper';

export default function MyAccount({navigation}) {
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
            fontSize: 36,
            color: Colors.buttons,
            fontWeight: 'bold',
            marginTop: 70,
          }}>
          Favorites
        </Text>
      </View>
      <View style={styles.createButton}>
        <Text style={styles.text5}>
          Make your favorite hotels with a heart icon{' '}
        </Text>
        <Text style={styles.text5}>and they will placed here for you</Text>
      </View>
      <View style={{justifyContent: 'flex-end', marginHorizontal: 20}}>
        <View style={styles.slider1}>
          <Image
            source={require('../assets/Images/VectorImages/2.jpg')}
            style={{height: 350, width: 350,marginLeft:20}}
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
