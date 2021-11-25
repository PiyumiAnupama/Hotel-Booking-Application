import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import {colors, Icon} from 'react-native-elements';
import Countdown from 'react-native-countdown-component';
import HomeHeader from '../components/HomeHeader';
import {Colors, parameters} from '../global/styles';
import {filterData, hotelData} from '../global/Data';
import HotelList from '../components/HotelList';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Homescreen() {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={styles.conteiner}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View
          style={{backgroundColor: Colors.cardbackground, paddingBottom: 5}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? Colors.buttons : Colors.grey4,
                }}>
                <Text style={styles.deliveryText}>Home</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? Colors.grey4 : Colors.buttons,
                }}>
                <Text style={styles.deliveryText}>Map</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filterView}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.grey5,
              borderRadius: 15,
              paddingVertical: 3,
            }}>
            <View style={styles.address}>
              <Icon
                type="material-community"
                name="map-marker"
                color={Colors.grey1}
                size={26}
              />
              <Text style={{marginLeft: 5}}>Elpitiya, Galle</Text>
            </View>
            <View style={styles.clock}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={Colors.grey1}
                size={26}
              />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="tune"
              color={Colors.grey1}
              size={26}
            />
          </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.smallCardSelected}
                      : {...styles.smallCard}
                  }>
                  <Image
                    style={{height: 60, width: 60, borderRadius: 30}}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? {...styles.smallCardTextSected}
                          : {...styles.smallCardText}
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Today Deals</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                marginTop: -10,
                marginRight: 5,
              }}>
              Options changing in
            </Text>
            <Countdown
              until={3600}
              size={14}
              digitStyle={{backgroundColor: Colors.lightgreen}}
              digitTxtStyle={{color: Colors.cardbackground}}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'Min', s: 'Sec'}}
            />
          </View>
        </View>
        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={hotelData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginRight: 5}}>
                <HotelList
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  hotelName={item.hotelName}
                  distanceToTheCity={item.distanceToTheCity}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>15% Discount</Text>
          </View>
        </View>
        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={hotelData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginRight: 5}}>
                <HotelList
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  hotelName={item.hotelName}
                  distanceToTheCity={item.distanceToTheCity}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Hotels in your area</Text>
          </View>
          <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
            {hotelData.map(item => (
              <View key={item.id} style={{paddingBottom: 20}}>
                <HotelList
                  screenWidth={SCREEN_WIDTH * 0.95}
                  images={item.images}
                  hotelName={item.hotelName}
                  distanceToTheCity={item.distanceToTheCity}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'white',
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  clock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: Colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  address: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerText: {
    color: colors.grey2,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
   
  },
  headerTextView: {
    backgroundColor: Colors.grey5,
    paddingVertical: 3,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: Colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 97,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: Colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 97,
    margin: 10,
    height: 100,
  },
  smallCardTextSected: {
    fontWeight: 'bold',
    color: Colors.cardbackground,
  },

  smallCardText: {
    fontWeight: 'bold',
    color: colors.grey2,
  },
});
