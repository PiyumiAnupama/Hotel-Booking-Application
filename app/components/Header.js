import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, parameters} from '../global/styles';
import {Icon} from 'react-native-elements';

export default function Header({title, type}) {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 20}}>
        <Icon
          type="material-community"
          name={type}
          color={Colors.headerText}
          size={28}
          onPress={() => {}}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: Colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
