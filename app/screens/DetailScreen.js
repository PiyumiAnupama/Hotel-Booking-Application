import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {Colors} from '../global/styles';
import Header from '../components/Header';
import {Formik} from 'formik';
import {Icon, Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';

const initialValues = {
  phone_number: '',
  name: '',
  family_name: '',
  password: '',
  email: '',
  username: '',
};

const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Fill in Your Details"
        type="arrow-left"
        navigation={navigation}
      />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.view1}>
          <Text style={styles.text1}>Sign-Up</Text>
        </View>
        <Formik>
          {props => (
            <View style={styles.view2}>
              <View>
                <Text style={styles.text2}>New on Hotel Booking ?</Text>
              </View>
              <View style={styles.view6}>
                <TextInput
                  placeholder="Mobile Number"
                  style={styles.input1}
                  keyboardType="number-pad"
                  autoFocus={true}
                  onChangeText={props.handleChange('phone_number')}
                />
              </View>
              <View style={styles.view6}>
                <TextInput
                  placeholder="First Name"
                  style={styles.input1}
                  autoFocus={false}
                  onChangeText={props.handleChange('name')}
                />
              </View>

              <View style={styles.view6}>
                <TextInput
                  placeholder="Last Name"
                  style={styles.input1}
                  autoFocus={false}
                  onChangeText={props.handleChange('family_name')}
                />
              </View>
              <View style={styles.view10}>
                <View>
                  <Icon
                    name="email"
                    style={styles.email}
                    color={Colors.grey3}
                    type="material"
                  />
                </View>
                <View style={styles.view11}>
                  <TextInput
                    placeholder="Email"
                    style={styles.input4}
                    autoFocus={false}
                    onChangeText={props.handleChange('email')}
                  />
                </View>
              </View>

              <View style={styles.view14}>
                <Animatable.View>
                  <Icon name="lock" color={Colors.grey3} type="material" />
                </Animatable.View>
                <TextInput
                  placeholder="Password"
                  style={{flex: 1}}
                  autoFocus={false}
                  onChangeText={props.handleChange('password')}
                />
                <Animatable.View>
                  <Icon
                    name="visibility-off"
                    color={Colors.grey3}
                    type="material"
                    style={{marginRight: 10}}
                  />
                </Animatable.View>
              </View>

              <View style={styles.view15}>
                <Text style={styles.text3}>
                  By creating or logging into an account you are
                </Text>
                <View style={styles.view16}>
                  <Text style={styles.text3}>agreeing with our </Text>
                  <Text style={styles.text4}> Terms & Conditions</Text>
                  <Text style={styles.text3}> and </Text>
                </View>
                <Text style={styles.text4}> Privacy Statement</Text>
              </View>
              <View style={styles.view17}>
                <Button
                  title="Create my account"
                  buttonStyle={styles.button1}
                  titleStyle={styles.title1}
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
        <View style={styles.view18}>
          <Text style={styles.text5}>OR</Text>
        </View>
        <View style={styles.view19}>
          <View style={styles.view20}>
            <Text style={styles.text6}>
              Already have an account with Hotel Booking ?
            </Text>
          </View>
          <View style={styles.view21}>
            <Button
              title="Sign-In"
              buttonStyle={styles.button2}
              titleStyle={styles.title2}
              onPress={() => {
                navigation.navigate('SignInScreen');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},

  view1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },

  text1: {fontSize: 22, color: Colors.buttons, fontWeight: 'bold'},

  view2: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },

  view3: {marginTop: 5, marginBottom: 10},

  text2: {fontSize: 15, color: Colors.grey2},

  view4: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
  },

  view5: {marginLeft: 30, marginTop: 20},

  input1: {fontSize: 16},

  view6: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },

  view7: {marginLeft: 0, maxWidth: '65%'},

  input2: {fontSize: 16, marginLeft: 0, marginBottom: 0},

  view8: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },

  view9: {marginLeft: 0, maxWidth: '65%'},

  input3: {fontSize: 16, marginLeft: 0, marginBottom: 0},

  view10: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },

  email: {
    fontSize: 24,
    padding: 0,
    marginBottom: 0,
    marginTop: 11,
    marginLeft: 2,
  },

  view11: {marginLeft: 30, maxWidth: '65%'},

  input4: {fontSize: 16, marginLeft: -20, marginBottom: -10},

  view13: {flexDirection: 'row', height: 40},

  view14: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.grey4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    marginTop: 20,
  },

  view15: {alignItems: 'center', justifyContent: 'center', marginTop: 10},

  text3: {fontSize: 13},

  view16: {flexDirection: 'row'},

  text4: {textDecorationLine: 'underline', color: 'green', fontSize: 13},

  button1: {
    backgroundColor: Colors.buttons,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.buttons,
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
  },

  title1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },

  view17: {marginVertical: 10, marginTop: 30},

  view18: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 15,
  },

  text5: {fontSize: 15, fontWeight: 'bold'},

  view19: {backgroundColor: 'white', paddingHorizontal: 15},

  view20: {marginTop: 5},

  view21: {marginTop: 10, alignItems: 'center'},

  button2: {
    backgroundColor: Colors.cardbackground,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.cardbackground,
    height: 40,
    paddingHorizontal: 20,
  },

  title2: {
    color: Colors.buttons,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
