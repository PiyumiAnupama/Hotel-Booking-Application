import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import {Colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import Header from '../../components/Header';

export default function SignInScreen({navigation}) {
  const [TextInput2Fossued, setTextInput2Fossued] = useState(false);

  const TextInput1 = useRef(1);
  const TextInput2 = useRef(2);

  return (
    <View style={styles.conteiner}>
      <Header title="HOTEL BOOKING" type="arrow-left" navigation={navigation} />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sing-In</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text}>Please enter the email and password</Text>
        <Text style={styles.text}>registerd with your account</Text>
      </View>

      <View>
        <View style={{marginTop: 20}}>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={TextInput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View
            animation={TextInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="lock"
              iconStyle={{color: Colors.grey3}}
              type="material"
            />
          </Animatable.View>

          <TextInput
            style={{width: '80%'}}
            placeholder="Password"
            ref={TextInput2}
            onFocus={() => {
              setTextInput2Fossued(false);
            }}
            onBlur={() => {
              setTextInput2Fossued(true);
            }}
          />

          <Animatable.View
            animation={TextInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="visibility-off"
              iconStyle={{color: Colors.grey3}}
              type="material"
              style={{marginRight: 10}}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => {
            navigation.navigate('DrawerNavigator');
          }}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{...styles.text, textDecorationLine: 'underline'}}>
          Forgot Password ?
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 30,
          marginBottom: 30,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>OR</Text>
      </View>

      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign in With Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign in With Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginTop: 25, marginLeft: 20}}>
        <Text style={{...styles.text}}>New on Hotel Booking ?</Text>
      </View>

      <View style={{marginHorizontal: 70, marginTop: 20}}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  text: {
    color: Colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#161a63',
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: '#161a63',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
