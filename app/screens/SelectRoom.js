import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  Touchable,
} from 'react-native';
import {Colors} from '../global/styles';
import Header from '../components/Header';
import {Formik} from 'formik';
import {Icon, Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';

const initialValues = {
  phone_number: '',
  name: '',
  family_name: '',
  password: '',
  email: '',
  username: '',
};

const SelectRoom = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Hotel Booking" type="arrow-left" navigation={navigation} />

      <ScrollView>
        <View style={styles.view1}>
          <Text style={styles.text2}>Best Deals</Text>
        </View>

        <View style={styles.view2}>
          <View style={styles.view10}>
            <Text style={styles.text1}>Delux Twin or Double Room</Text>
            <Text style={styles.text8}>Beds : 1 double bed </Text>
            <Text style={styles.text8}> or</Text>
            <Text style={styles.text8}> 2 single beds</Text>
            <Text style={styles.text8}>Free cancellation at any time </Text>
            <Text style={styles.text8}>Breakfast available</Text>
            <Text style={styles.text8}>Pay at the property</Text>
            <TouchableOpacity>
              <View style={styles.view14}>
                <Text style={styles.text3}>Price for 1 night</Text>
              </View>
              <View style={styles.view14}>
                <Text
                  style={{
                    ...styles.text11,
                    textDecorationLine: 'line-through',
                  }}>
                  LKR 11 755
                </Text>
                <Text style={styles.text11}> LKR 11 755</Text>
              </View>
              <View style={styles.view14}>
                <Text style={styles.text11}>+ LKR 1 305 taxes and charges</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.view2}>
          <View style={styles.view10}>
            <Text style={styles.text1}>Delux Twin or Double Room</Text>
            <Text style={styles.text8}>Beds : 1 double bed </Text>
            <Text style={styles.text8}> or</Text>
            <Text style={styles.text8}> 2 single beds</Text>
            <Text style={styles.text8}>Free cancellation at any time </Text>
            <Text style={styles.text8}>Breakfast available</Text>
            <Text style={styles.text8}>Pay at the property</Text>
            <TouchableOpacity>
              <View style={styles.view14}>
                <Text style={styles.text3}>Price for 1 night</Text>
              </View>
              <View style={styles.view14}>
                <Text
                  style={{
                    ...styles.text11,
                    textDecorationLine: 'line-through',
                  }}>
                  LKR 11 755
                </Text>
                <Text style={styles.text11}> LKR 11 755</Text>
              </View>
              <View style={styles.view14}>
                <Text style={styles.text11}>+ LKR 1 305 taxes and charges</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.view10}>
            <Text style={styles.text1}>Delux Twin or Double Room</Text>
            <Text style={styles.text8}>Beds : 1 double bed </Text>
            <Text style={styles.text8}> or</Text>
            <Text style={styles.text8}> 2 single beds</Text>
            <Text style={styles.text8}>Free cancellation at any time </Text>
            <Text style={styles.text8}>Breakfast available</Text>
            <Text style={styles.text8}>Pay at the property</Text>
            <TouchableOpacity>
              <View style={styles.view14}>
                <Text style={styles.text3}>Price for 1 night</Text>
              </View>
              <View style={styles.view14}>
                <Text
                  style={{
                    ...styles.text11,
                    textDecorationLine: 'line-through',
                  }}>
                  LKR 11 755
                </Text>
                <Text style={styles.text11}> LKR 11 755</Text>
              </View>
              <View style={styles.view14}>
                <Text style={styles.text11}>+ LKR 1 305 taxes and charges</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.view10}>
            <Text style={styles.text1}>Delux Twin or Double Room</Text>
            <Text style={styles.text8}>Beds : 1 double bed </Text>
            <Text style={styles.text8}> or</Text>
            <Text style={styles.text8}> 2 single beds</Text>
            <Text style={styles.text8}>Free cancellation at any time </Text>
            <Text style={styles.text8}>Breakfast available</Text>
            <Text style={styles.text8}>Pay at the property</Text>
            <TouchableOpacity>
              <View style={styles.view14}>
                <Text style={styles.text3}>Price for 1 night</Text>
              </View>
              <View style={styles.view14}>
                <Text
                  style={{
                    ...styles.text11,
                    textDecorationLine: 'line-through',
                  }}>
                  LKR 11 755
                </Text>
                <Text style={styles.text11}> LKR 11 755</Text>
              </View>
              <View style={styles.view14}>
                <Text style={styles.text11}>+ LKR 1 305 taxes and charges</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.view10}>
            <Text style={styles.text1}>Delux Twin or Double Room</Text>
            <Text style={styles.text8}>Beds : 1 double bed </Text>
            <Text style={styles.text8}> or</Text>
            <Text style={styles.text8}> 2 single beds</Text>
            <Text style={styles.text8}>Free cancellation at any time </Text>
            <Text style={styles.text8}>Breakfast available</Text>
            <Text style={styles.text8}>Pay at the property</Text>
            <TouchableOpacity>
              <View style={styles.view14}>
                <Text style={styles.text3}>Price for 1 night</Text>
              </View>
              <View style={styles.view14}>
                <Text
                  style={{
                    ...styles.text11,
                    textDecorationLine: 'line-through',
                  }}>
                  LKR 11 755
                </Text>
                <Text style={styles.text11}> LKR 11 755</Text>
              </View>
              <View style={styles.view14}>
                <Text style={styles.text11}>+ LKR 1 305 taxes and charges</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailScreen');
        }}>
        <View style={styles.view11}>
          <View style={styles.view12}>
            <Text style={styles.text13}>Reserve</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SelectRoom;

const styles = StyleSheet.create({
  container: {flex: 1},

  view1: {
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {
    color: Colors.buttons,
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },

  view2: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },

  view3: {flex: 8},

  text2: {fontSize: 28, fontWeight: 'bold', color: Colors.grey1},

  text3: {fontSize: 15, color: Colors.grey3},

  view4: {flexDirection: 'row', alignItems: 'center', marginTop: 5},

  text4: {
    fontSize: 13,
    color: Colors.grey3,
    marginLeft: 2,
  },

  text5: {
    fontSize: 13,
    color: Colors.grey3,
    marginLeft: 2,
    marginRight: 5,
  },
  text6: {
    marginTop: 5,
    fontSize: 13,
    color: Colors.grey3,
    marginLeft: 0,
  },

  view5: {flex: 3, alignItems: 'center'},

  view7: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
  },

  text7: {fontSize: 16, fontWeight: 'bold', color: Colors.black, marginTop: 5},

  text8: {fontSize: 15, color: 'black', marginLeft: 15},

  view8: {flex: 3, alignItems: 'center'},

  text9: {fontSize: 15, fontWeight: 'bold', color: Colors.cardbackground},

  view9: {
    marginTop: 5,
    width: 35,
    height: 35,
    backgroundColor: Colors.buttons,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'space-around',
  },

  text10: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.cardbackground,
    marginTop: 5,
  },

  text11: {fontSize: 13, color: Colors.cardbackground, marginBottom: 5},

  view10: {
    elevation: 10,
    backgroundColor: Colors.cardbackground,
    width: '100%',
    marginBottom: 10,
  },

  view11: {
    backgroundColor: Colors.buttons,
    height: 50,
    alignContent: 'center',
    marginBottom: 0,
    justifyContent: 'center',
  },

  view12: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 25,
    marginRight: 20,
  },

  text12: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.cardbackground,
  },

  view13: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: Colors.cardbackground,
    borderRadius: 6,
    paddingBottom: 2,
    marginLeft: 15,
  },

  text13: {
    paddingHorizontal: 100,
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.cardbackground,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tab: {
    paddingTop: 0,
    backgroundColor: Colors.buttons,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tabContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  tabLabel: {fontWeight: 'bold', color: Colors.cardbackground},

  tabStyle: {maxHeight: 45},

  view14: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.statusbar,
  },

  text14: {
    fontWeight: 'bold',
    marginLeft: 15,
    color: 'black',
    fontSize: 18,
  },

  view15: {marginTop: 5, paddingBottom: 20},
  text16: {
    fontWeight: 'bold',
    marginLeft: 15,
    color: Colors.grey2,
    fontSize: 22,
    marginTop: 10,
  },
  text17: {fontSize: 15, color: 'black', marginBottom: 5, marginLeft: 5},
  view16: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  view17: {
    elevation: 10,
    backgroundColor: Colors.cardbackground,
    marginTop: 10,
  },
});
