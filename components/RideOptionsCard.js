import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'
import { Icon, Image } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'
import { selectTravelTimeInformation } from '../slices/navSlice';
import { useSelector } from 'react-redux';





const data = [
    {
        id: "Uber-x-123",
        title: "Uber X",
        multiplier: 1,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png",
        
    },
    {
        id: "Uber-xl-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png",
        
    },
    {
        id: "Uber-lux-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png",
        
    },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {

    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation)


    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
         <View>
             <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
                 <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>
                    Select a ride - {travelTimeInformation?.distance?.text}
                </Text>
         </View>

         <FlatList data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item: {id, title, multiplier, image}, item }) => (
                <TouchableOpacity style={tw`flex-row justify-between items-center px-5 
                ${id === selected?.id && "bg-gray-200"}` } 
                //conditional style , if id of what were mapping through === id of what is selected? take its id and make that one -> bg gray-200
                onPress={() => setSelected(item)}
                >
                    <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                    source={{ uri: image }}
                    />
                    <View style={tw`-ml-6`}>
                        <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        <Text>{travelTimeInformation?.duration?.text} trip</Text>
                    </View>
                    <Text style={tw`text-xl`}> 
                    {new Intl.NumberFormat('en-us', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(
                        (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
                    )}
                    </Text>
                </TouchableOpacity>
            )}
         
         />

         <View style={tw`mt-auto`}>
             <TouchableOpacity 
             disabled={!selected}
             style={tw`bg-black py-3 m-5 bottom-4 ${!selected && "bg-gray-300"}`}
             >
                 <Text style={tw`text-center text-white text-xl`}>
                     {/* fix button position */}
                        Choose {selected?.title}

                 </Text>
             </TouchableOpacity>
         </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
                                     
                                     
                 
                 
