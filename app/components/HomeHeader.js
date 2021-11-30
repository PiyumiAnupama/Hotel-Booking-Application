import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import {Colors, parameters} from '../global/styles';

export default function HomeHeader({navigation}) {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={Colors.cardbackground}
          size={32}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>
      <View style={{alignContent: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: Colors.cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Hotel Booking
        </Text>
      </View>
      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          marginRight: 15,
        }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={Colors.cardbackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },
});
