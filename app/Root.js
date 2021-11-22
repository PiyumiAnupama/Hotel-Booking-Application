import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './components/Header';

import {Colors} from './global/styles';
import SignInScreen from './screens/authScreens/SignInScreen';
import SignInWelcomScreen from './screens/authScreens/SignInWelcomScreen';

export default function Root() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.statusbar} />
      <SignInWelcomScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
