import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Colors, parameters} from '../../global/styles';
import Swiper from 'react-native-swiper';
import Header from '../../components/Header';

export default function SignInWelcomScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header title="HOTEL BOOKING" />
      <View style={{justifyontent: 'center'}} />
      <Swiper autoplay={true}>
        <View style={styles.slider1}>
          <Image
            source={require('../../assets/Images/SignInWelcomeScreenImages/1.jpg')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={styles.slider2}>
          <Image
            source={require('../../assets/Images/SignInWelcomeScreenImages/6.jpeg')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={styles.slider3}>
          <Image
            source={require('../../assets/Images/SignInWelcomeScreenImages/7.jpg')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={styles.slider3}>
          <Image
            source={require('../../assets/Images/SignInWelcomeScreenImages/5.jpeg')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
      </Swiper>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 40,
        }}>
        <Text style={{fontSize: 36, color: Colors.buttons, fontWeight: 'bold'}}>
          Discover Hotels
        </Text>
        <Text
          style={{
            fontSize: 36,
            color: Colors.buttons,
            fontWeight: 'bold',
            marginBottom: 70,
          }}>
          In the World
        </Text>
      </View>
      <View style={{justifyContent: 'flex-end', marginHorizontal: 20}}>
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 40,
          }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          />
        </View>
      </View>
      <View style={{marginHorizontal: 40, marginBottom: 100}}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slider1: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#9006E8',
  },
  slider2: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#97CAE5',
  },
  slider3: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#9388D9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#161a63',
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
});
