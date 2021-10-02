import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'

import { Icon, Image } from 'react-native-elements';


import tw from 'tailwind-react-native-classnames'


const data = [
    {
        id: "Uber-x-123",
        title: "UberX",
        multiplier: 1,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png",
        
    },
    {
        id: "Uber-xl-456",
        title: "UberX",
        multiplier: 1.2,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png",
        
    },
    {
        id: "Uber-lux-789",
        title: "UberX",
        multiplier: 1.75,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png",
        
    },
];

const RideOptionsCard = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
         <View>
             <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
                 <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a ride</Text>
         </View>

         <FlatList data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item: {id, title, multiplier, image} }) => (
                <TouchableOpacity style={tw`flex-row justify-between items-center px-1`}>
                    <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                    source={{ uri: image }}
                    />
                    <View>
                        <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        <Text>Travel time...</Text>
                    </View>
                    <Text style={tw`text-xl`}>$99</Text>
                </TouchableOpacity>
            )}
         
         />
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
