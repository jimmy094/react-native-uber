import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import  { GOOGLE_MAPS_APIKEY } from "@env"
import { setDestination } from '../slices/navSlice'
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'


const NavigateCard = () => {


    const dispatch = useDispatch();
    const navigation = useNavigation();


    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Yelloooo</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}></View>
            <View>
                <GooglePlacesAutocomplete 
                placeholder="Where to?" 
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={"search"}
                minLength={2}
                onPress={(data, details = null) => {
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    }))

                    navigation.navigate("RideOptionsCard")
                }} 
                enablePoweredByContainer={false}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en",
                }}
                nearbyPlacesApi="GooglePlacesSearch"
                debounce={400}
                />
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({

    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,

    }, textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 0,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
})
