import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {SignInContextProvider} from './context/authContext';

import {Colors} from './global/styles';
import RootNavigator from './navigation/RootNavigator';

export default function Root() {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.statusbar}
        />
        <RootNavigator />
      </View>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
