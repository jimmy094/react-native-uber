import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'

//home screen if you couldnt tell by the file name
const HomeScreen = () => {
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

                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
