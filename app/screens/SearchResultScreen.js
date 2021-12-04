import React from 'react'
import { StyleSheet, Text, View,Dimensions,FlatList } from 'react-native'
import SearchResultCard from '../components/SearchResultCard'
import { hotelData } from '../global/Data';
import {Colors} from "../global/styles";

const SCREEN_WIDTH = Dimensions.get('window').width;


const SearchResultScreen = ({navigation,route}) => {
    return (
        <View style ={styles.container}>

           

            <View>
                <FlatList 
                     style ={{backgroundColor:Colors.cardbackground}}
                    data = {hotelData}
                    keyExtractor ={(item,index)=>index.toString()}
                    renderItem ={({item,index})=> (

                        <SearchResultCard
                            screenWidth = {SCREEN_WIDTH}
                            images = {item.images}
                            averageReview ={item.averageReview}
                            numberOfReview ={item.numberOfReview}
                            restaurantName ={item.hotelName}
                            farAway ={item.distanceToTheCity}
                            businessAddress ={item.businessAddress}
                            productData ={item.details}
                            OnPressRestaurantCard ={()=>{navigation.navigate("HomeScreen",{id:index,restaurant:item.hoteltName})}}
                        />
                                    
                          )}

                     ListHeaderComponent ={
                        <View>
                            <Text style ={styles.listHeader}>{hotelData.length} Result for {route.params.item}</Text>
                        </View>
                     }   

                     showsVerticalScrollIndicator ={false}
                />
            </View>
           
        </View>
    )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
      paddingTop:20
    },

    listHeader:{color :Colors.grey1,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
},
})