//rnf
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TopRestaurante from '../screens/TopRestaurante'

//creando el stack de navegacion - lo que se ve en la parte de arriba del menu
const Stack = createStackNavigator()

export default function TopRestauranteStacks() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="_restaurante"
            component={TopRestaurante}
            options={{title:"Top 5"}}//se en la barra de arriba
            />
        </Stack.Navigator>
    )
}
