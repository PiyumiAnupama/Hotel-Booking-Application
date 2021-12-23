import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import HotelHeader from '../components/HotelHeader';
import {hotelData} from '../global/Data';
import {Colors} from '../global/styles';
import {Icon} from 'react-native-elements';
import {TabView, TabBar} from 'react-native-tab-view';



const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

const HotelInfoScreen = ({navigation, route}) => {
  const {id, hotelName} = route.params;
  const [routes] = useState([
    {key: 'first', title: 'Features'},
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
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.text2}>{hotelData[id].hotelName}</Text>

              <View style={styles.view4}>
                <Icon
                  name="map-marker"
                  type="material-community"
                  color={Colors.grey3}
                  size={15}
                />
                <Text style={styles.text6}>
                  {hotelData[id].distanceToTheCity}
                </Text>
              </View>
            </View>
            <View style={styles.view5}>
              <Text style={styles.text6}>Reviews</Text>
              <View style={styles.view7}>
                <Text style={styles.text7}>{hotelData[id].numberOfReview}</Text>
              </View>
            </View>
            <View style={styles.view8}>
              <Text style={styles.text6}>Febulous</Text>
              <View style={styles.view9}>
                <Text style={styles.text9}>{hotelData[id].averageReview}</Text>
              </View>
            </View>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text5}>{hotelData[id].businessAddress}</Text>
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
        
        <View style={styles.view10}>
          <Text style={styles.text16}>Facilities</Text>
          <View style={styles.view16}>
            <Image
              source={require('../assets/Images/DetailsScreenImages/1.png')}
              style={{height: 40, width: 40, marginLeft: 10}}
            />
            <Text style={styles.text17}>{hotelData[id].facility}</Text>
          </View>
          <View style={styles.view16}>
            <Image
              source={require('../assets/Images/DetailsScreenImages/7.jpg')}
              style={{height: 35, width: 35, marginLeft: 10}}
            />
            <Text style={styles.text17}>{hotelData[id].facility1}</Text>
          </View>
          <View style={styles.view16}>
            <Image
              source={require('../assets/Images/DetailsScreenImages/3.png')}
              style={{height: 40, width: 40, marginLeft: 10}}
            />
            <Text style={styles.text17}>{hotelData[id].facility2}</Text>
          </View>
          <View style={styles.view16}>
            <Image
              source={require('../assets/Images/DetailsScreenImages/4.png')}
              style={{height: 40, width: 40, marginLeft: 10}}
            />
            <Text style={styles.text17}>{hotelData[id].facility3}</Text>
          </View>
          <View style={styles.view16}>
            <Image
              source={require('../assets/Images/DetailsScreenImages/5.png')}
              style={{height: 40, width: 40, marginLeft: 10}}
            />
            <Text style={styles.text17}>{hotelData[id].facility4}</Text>
          </View>
          <View style={styles.view16}>
            <Image
              source={require('../assets/Images/DetailsScreenImages/8.png')}
              style={{height: 35, width: 35, marginLeft: 10}}
            />
            <Text style={styles.text17}>{hotelData[id].facility5}</Text>
          </View>
        </View>
        <View style={styles.view17}>
          <Text style={styles.text16}>Property</Text>
          <View style={styles.view16}>
            <Text style={styles.text1}>{hotelData[id].property1}</Text>
          </View>
          <View style={styles.view16}>
            <Text style={styles.text8}>{hotelData[id].intro}</Text>
          </View>
          <View style={styles.view16}>
            <Text style={styles.text1}>{hotelData[id].property2}</Text>
          </View>
          <View style={styles.view16}>
            <Text style={styles.text8}>{hotelData[id].intro1}</Text>
          </View>
          <View style={styles.view16}>
            <Text style={styles.text1}>{hotelData[id].property3}</Text>
          </View>
          <View style={styles.view16}>
            <Text style={styles.text8}>{hotelData[id].intro2}</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity  onPress={() => {
              navigation.navigate('SelectRoom');
            }}>
        <View style={styles.view11}>
          <View style={styles.view12}>
            <Text style={styles.text13}>BOOK NOW</Text>
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

  text1: {
    color: Colors.buttons,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom:-10,
  },

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
    marginTop: 5,
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

  text8: {fontSize: 13, color: 'black',  marginLeft: 15},

  view8: {flex: 3, alignItems: 'center'},

  text9: {fontSize: 15, fontWeight: 'bold', color: Colors.cardbackground},

  view9: {
    marginTop: 5,
    width: 35,
    height: 35,
    backgroundColor: Colors.buttons,
    alignItems: 'center',
    borderRadius: 30,
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
    paddingHorizontal: 100,
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.cardbackground,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginLeft: 15,
    color: 'black',
    fontSize: 18,
  },

  view15: {marginTop: 5, paddingBottom: 20},
  text16: {
    fontWeight: 'bold',
    marginLeft: 15,
    color: Colors.grey2,
    fontSize: 22,
    marginTop: 10,
  },
  text17: {fontSize: 15, color: 'black', marginBottom: 5, marginLeft: 5},
  view16: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  view17: {
    elevation: 10,
    backgroundColor: Colors.cardbackground,
    marginTop: 10,
  },
});