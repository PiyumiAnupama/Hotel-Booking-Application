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

const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Fill in Your Details"
        type="arrow-left"
        navigation={navigation}
      />
      <ScrollView keyboardShouldPersistTaps="always">
        <Formik>
          {props => (
            <View style={styles.view2}>
              <View style={styles.view15} />
              <View style={styles.view15} />
              <View style={styles.view15} />
              <View style={styles.view15} />
              <View style={styles.view6}>
                <TextInput
                  placeholder="First Name"
                  style={styles.input1}
                  autoFocus={true}
                  onChangeText={props.handleChange('phone_number')}
                />
              </View>
              <View style={styles.view6}>
                <TextInput placeholder="Last Name" style={styles.input1} />
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
                <TextInput
                  placeholder="Phone Number"
                  style={{flex: 1}}
                  autoFocus={false}
                />
              </View>

              <View style={styles.view15} />
              <View style={styles.view17}>
                <Button
                  title="Conform Booking"
                  buttonStyle={styles.button1}
                  titleStyle={styles.title1}
                  onPress={() => {
                    navigation.navigate('ThankYouScreen');
                  }}
                />
              </View>
            </View>
          )}
        </Formik>
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
