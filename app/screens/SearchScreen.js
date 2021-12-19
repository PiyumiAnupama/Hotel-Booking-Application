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
  Image,
} from 'react-native';
import SearchComponent from '../components/SearchComponent';
import {filterData2} from '../global/Data';
import {Colors} from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        marginBottom: 10,
        paddingTop: 20,
        backgroundColor: 'white',
      }}>
      <SearchComponent />
      <View style={{marginTop: 10}}>
        <View />
        <View style={styles.slider1}>
          <Image
            source={require('../assets/Images/VectorImages/3.jpg')}
            style={{height: 250, width: 250, marginLeft: 80, marginTop: 250}}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  slider1: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
  },

  createButton: {
    alignContent: 'center',
    justifyContent: 'center',

    marginLeft: 40,
    marginBottom: 15,

    height: 50,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: Colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
  text5: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.grey2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
