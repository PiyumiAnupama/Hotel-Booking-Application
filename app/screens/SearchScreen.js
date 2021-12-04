import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackgroundComponent,
} from 'react-native';
import SearchComponent from '../components/SearchComponent';
import {filterData2} from '../global/Data';
import {Colors} from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen({navigation}) {
  return (
    <View style={{flex: 1, marginBottom: 10, paddingTop: 20}}>
      <SearchComponent />
      <View style={{marginTop: 10}}>
        <View />
      </View>
    </View>
  );
}
