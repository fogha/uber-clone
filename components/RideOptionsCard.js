import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { selectTravelTimeInfo } from '../slices/navigationSlice'

const data = [
  {
    id: "Uber-X-1",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-2",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-3",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  },
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInfo = useSelector(selectTravelTimeInfo)

  return (
    <SafeAreaView style={[tw`bg-white flex-grow`, { marginTop: -20 }]}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon
            name="chevron-left"
            type="fontawesome"
          />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInfo?.distance?.text}</Text>
      </View>
      <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item: {id, image, multiplier, title}, item }) => (
          <TouchableOpacity onPress={() => setSelected(item)} style={tw`flex-row justify-between items-center px-5 ${id === selected?.id && "bg-gray-200"}`}>
            <Image
              source={{ uri: image}}
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
              }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-lg font-semibold`}>{title}</Text>
              <Text>{travelTimeInfo?.duration.text} Travel Time</Text>
            </View>
            <Text style={tw`text-lg`}>
              {
                (new Intl.NumberFormat("en-gb", {
                  style: "currency",
                  currency: "XAF"
                }).format(
                  (travelTimeInfo?.duration.value * SURGE_CHARGE_RATE * multiplier)
                )) || 0
              }
            </Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard