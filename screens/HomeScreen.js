import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';


//home screen if you couldnt tell by the file name
const HomeScreen = () => {

    const dispatch = useDispatch();
    return (
        //using safeareaview to get the text to appear in a visible area of the screen
        //using tailwind css
        //background: white, height: full

        <SafeAreaView style={tw`bg-white h-full`}>
            {/* using padding: 5 (p-5) below to create space on each side of the logo were styling to give it space off the top and bottom of screen */}
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />

                <GooglePlacesAutocomplete 
                    placeholder="Where from?"
                    
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) => {

                        
                        dispatch(
                            setOrigin({
                            location: details.geometry.location,
                            description: data.description
                            })

                        );

                        dispatch(setDestination(null))
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />



                <NavOptions />
                <NavFavorites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
