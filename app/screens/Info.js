import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {color, Icon} from 'react-native-elements';
import {specialData, menuData} from '../global/Data';
import {Colors} from '../global/styles';

const Info = ({navigation, hotel, onPress}) => {
  return (
    <View style={styles.container}>
      <View>
        {specialData.map(items => (
          <View key={items.key} style={styles.view1}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.view2}>
                <Icon name="star" type="material-community" color="gold" />
                <Text style={styles.text1}>{items.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View>
        {menuData.map(items => (
          <View key={items.key} style={styles.view1}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.view2}>
                <Text style={styles.text1}>{items.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  view1: {paddingHorizontal: 10},

  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: Colors.grey5,
  },

  text1: {
    color: Colors.grey3,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
