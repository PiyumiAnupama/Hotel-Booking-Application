import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import HotelHeader from '../components/HotelHeader';
import {hotelData} from '../global/Data';
import {Colors} from '../global/styles';
import {Icon} from 'react-native-elements';
import {TabView, TabBar} from 'react-native-tab-view';
import Info from './Info';

const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

const HotelInfoScreen = ({navigation, route}) => {
  const {id, hotelName} = route.params;
  const [routes] = useState([
    {key: 'first', title: 'MENU'},
    {key: 'second', title: 'INFO'},
    {key: 'third', title: 'REVIEWS'},
    {key: 'fourth', title: 'GALLERY'},
  ]);

  const [index, setIndex] = useState(0);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: Colors.cardbackground}}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  const UpdateRoute1 = () => {
    return <View />;
  };
  const InfoPressed = () => {
    navigation.navigate('MoreInfoScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <HotelHeader id={id} navigation={navigation} />
          {hotelData[id].discountPrice && (
            <View style={styles.view1}>
              <Text style={styles.text1}>
                GET {hotelData[id].discountPrice}% OFF ON FOOD TOTAL
              </Text>
            </View>
          )}
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.text2}>{hotelData[id].hotelName}</Text>
              <Text style={styles.text3}>{hotelData[id].offer}</Text>
              <View style={styles.view4}>
                <Icon
                  name="star"
                  type="material-community"
                  color={Colors.grey3}
                  size={15}
                />
                <Text style={styles.text4}>{hotelData[id].averageReview}</Text>
                <Text style={styles.text5}>{hotelData[id].numberOfReview}</Text>
                <Icon
                  name="map-marker"
                  type="material-community"
                  color={Colors.grey3}
                  size={15}
                />
                <Text style={styles.text6}>
                  {hotelData[id].distanceToTheCity} mi away
                </Text>
              </View>
            </View>
            <View style={styles.view5}>
              <Text style={styles.text6}>Collect</Text>
              <View style={styles.view7}>
                <Text style={styles.text7}>
                  {hotelData[id].distanceToTheCity}
                </Text>
                <Text style={styles.text8}>min</Text>
              </View>
            </View>
            <View style={styles.view8}>
              <Text style={styles.text6}>Delivery</Text>
              <View style={styles.view9}>
                <Text style={styles.text9}>{hotelData[id].stars}</Text>
                <Text style={styles.text11}>min</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.view10}>
          <TabView
            navigationState={{index, routes}}
            renderScene={UpdateRoute1}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>
        {index === 0 && <Info onPress={InfoPressed} />}
      </ScrollView>

      <TouchableOpacity>
        <View style={styles.view11}>
          <View style={styles.view12}>
            <Text style={styles.text13}>View Cart</Text>
            <View style={styles.view13}>
              <Text style={styles.text13}>0</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HotelInfoScreen;

const styles = StyleSheet.create({
  container: {flex: 1},

  view1: {
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {color: 'green', fontSize: 14, fontWeight: 'bold'},

  view2: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },

  view3: {flex: 8},

  text2: {fontSize: 20, fontWeight: 'bold', color: Colors.grey1},

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

  text8: {fontSize: 13, color: 'black', marginBottom: 5},

  view8: {flex: 3, alignItems: 'center'},

  text9: {fontSize: 15, fontWeight: 'bold', color: Colors.cardbackground},

  view9: {
    width: 40,
    height: 40,
    backgroundColor: Colors.buttons,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
  },

  text10: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.cardbackground,
    marginTop: 5,
  },

  text11: {fontSize: 13, color: Colors.cardbackground, marginBottom: 5},

  view10: {elevation: 10, backgroundColor: Colors.cardbackground},

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
    paddingHorizontal: 3,
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.cardbackground,
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

  tabStyle: {width: SCREEN_WIDTH / 4, maxHeight: 45},

  view14: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.buttons,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
  },

  text14: {
    fontWeight: 'bold',
    marginLeft: 40,
    color: 'black',
    fontSize: 18,
  },

  view15: {marginTop: 5, paddingBottom: 20},
});
