import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native'
import styles from './styles';
import tw from "tailwind-react-native-classnames"
import NavOptions from '../../components/navOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from './../../slices/navigationSlice';
import NavFavourites from '../../components/navFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image style={styles.img} source={{ uri: 'https://links.papareact.com/gzs'}}/>
        <GooglePlacesAutocomplete 
          placeholder='Where from?'
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))
            dispatch(setDestination(null))
          }}
          query={{
            key: GOOGLE_MAPS_KEY,
            language: 'en'
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen