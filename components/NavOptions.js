import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://static.wixstatic.com/media/546dbf_2f48b1cd07654aa2865d1fa71c8b3085~mv2.gif",
        screen: "EatsScreen",
    },
];



//in the flat list we take in data (ourjsondata) we render out for each "item" aka object its item.title
//use touchable opacity to give an effect when clicked
// with a list you should have a key, keyExtractor takes in the item and selects the item.id to be the unique identifier for key.
//using item.title for the text under the icons
//styling the image to give it the same size and to keep the aspect ratio the same

const NavOptions = () => {
    return (
       <FlatList 
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
              // can apply bg-gray-200 
              <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 m-2 w-40`}>
                <View>
                  <Image
                    style={{width: 120, height: 120, resizeMode: "contain" }}
                    source={{ uri: item.image }}
                  />
                  <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                  <Icon 
                  //style below gives the rounded black buttons with white arrows inside.
                  style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                  name="arrowright" color="white" type="antdesign" 
                  />
                  
                </View>
              </TouchableOpacity>
          )}
       />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
