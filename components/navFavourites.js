import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

const data = [
    {
        id: '1',
        icon: 'home',
        location: 'home',
        destination: 'Code Street, London UK',
    },
    {
        id: '2',
        icon: 'briefcase',
        location: 'Work',
        destination: 'London Eye, London UK',
    },
]


const NavFavourites = () => {
  return (
    <FlatList 
        data={data}
        keyExtractor={(item => item.id)}
        ItemSeparatorComponent={()=>(<View style={[tw`bg-gray-200`, {height: 0.5}]}/>)}
        renderItem={({item: {location, icon, destination}}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                <Icon 
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavFavourites

const style = StyleSheet.create({

})