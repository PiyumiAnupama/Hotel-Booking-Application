import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import RootNavigator from '../navigation/RootNavigator';
import {Colors} from './global/styles';

export default function Root() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.statusbar} />
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
