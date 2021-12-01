import React, {useState, useContext, useEffect} from 'react';

import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  StyleSheet,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Avatar, Button, Icon} from 'react-native-elements';

import {Colors} from '../global/styles';

export default function MenuBar(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: Colors.buttons, marginTop:-4}}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              paddingLeft: 10,
              paddingVertical: 10,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={100}
              source={{
                uri: 'https://www.mothermary.rw/images/img/lady.jpg',
              }}
            />

            <View style={{alignItems: 'center', marginTop: 10}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: Colors.cardbackground,
                  fontSize: 18,
                }}>
                The New User
              </Text>
              <Text style={{color: Colors.cardbackground, fontSize: 14}}>
                {' '}
                newuser@gmail.com
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 10,
            }}>
            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: Colors.cardbackground,
                    fontSize: 18,
                  }}>
                  1
                </Text>
                <Text style={{color: Colors.cardbackground, fontSize: 14}}>
                  My Favorites
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: Colors.cardbackground,
                    fontSize: 18,
                  }}>
                  0
                </Text>
                <Text style={{color: Colors.cardbackground, fontSize: 14}}>
                  My Booking
                </Text>
              </View>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Promotions"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Help"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />

        <View style={{borderTopWidth: 1, borderTopColor: Colors.grey5}}>
          <Text style={styles.preferences}>Preferences</Text>

          <View style={styles.switchText}>
            <Text style={styles.darkthemeText}>Dark Theme</Text>
            <View style={{paddingRight: 10}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <DrawerItem
        label="Sign Out"
        icon={({color, size}) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avatar: {
    borderWidth: 0.5,
    borderColor: Colors.grey5,
  },

  preferences: {
    fontSize: 16,
    color: Colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },

  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkthemeText: {
    fontSize: 16,
    color: Colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
  },
});
