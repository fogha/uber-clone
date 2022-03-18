import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from "@env"
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setDestination } from './../slices/navigationSlice';
import NavFavourites from './navFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={[tw`bg-white flex-1`, {marginTop: -20}]}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning Armand</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where to'
            styles={toInputStyles}
            nearbyPlacesAPI='GooglePlacesSearch'
            query={{
              key: GOOGLE_MAPS_KEY,
              language: 'en'
            }}
            onPress={(data, details = null) => {
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description
              }))

              navigation.navigate("RideOptionsCard")
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            debounce={400}
          />
        </View>
        <NavFavourites />
      </View>

      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity
          style={tw`flex justify-between flex-row bg-black w-24 px-4 py-3 rounded-full`}
          onPress={() => navigation.navigate('RideOptionsCard')}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex justify-between flex-row w-24 px-4 py-3 rounded-full`}>
          <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 30,
    flex: 0
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})