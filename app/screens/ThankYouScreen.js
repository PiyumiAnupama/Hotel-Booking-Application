import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Colors, parameters} from '../global/styles';
import Swiper from 'react-native-swiper';

export default function ThankYouScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.slider1}>
        <Image
          source={require('../assets/Images/VectorImages/5.png')}
          style={{height: 400, width: 400}}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 36,
            color: Colors.buttons,
            fontWeight: 'bold',
            marginTop: -60,
          }}>
          Confirmed
        </Text>
      </View>
      <View style={styles.createButton}>
        <Text style={styles.text5}> You'll get an email with</Text>
        <Text style={styles.text5}>your booking confimation</Text>
      </View>
      <View style={{justifyContent: 'flex-end', marginHorizontal: 20}}>
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 40,
          }}>
          <Button
            title="Back Home"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
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
    marginTop: 80,
  },

  createButton: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginLeft: 90,
    marginBottom: 55,

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
