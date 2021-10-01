import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import MapView from 'react-native-maps' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const MapScreen = () => {

    const Stack = createNativeStackNavigator();
    // stack navigator implemented to create a stack of screens 
    return (
        <View>
            <Text>MAp Stuff</Text>
            {/* styling is to keep map at top half of page. INsert map component */}
            <View style={tw`h-1/2`}>
                <Map />
            </View>
                {/* bottom half of page */}
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                     name="NavigateCard"
                     component={NavigateCard}
                     options={{
                         headerShown: false,
                     }}
                    />

                <Stack.Screen
                     name="RideOptionsCard"
                     component={RideOptionsCard}
                     options={{
                         headerShown: false,
                     }}
                    />

                    
                </Stack.Navigator>
            </View>

        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
