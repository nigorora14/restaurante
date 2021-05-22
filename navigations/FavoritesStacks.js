//rnf
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import favorites from '../screens/favorites'

//creando el stack de navegacion - lo que se ve en la parte de arriba del menu
const Stack = createStackNavigator()

export default function FavoritesStacks() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="_favorites"
            component={favorites}
            options={{title:"Favoritos"}}//se en la barra de arriba
            />
        </Stack.Navigator>
    )
}
