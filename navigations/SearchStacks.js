//rnf
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Search from '../screens/Search'

//creando el stack de navegacion - lo que se ve en la parte de arriba del menu
const Stack = createStackNavigator()

export default function SearchStacks() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="_search"
            component={Search}
            options={{title:"Buscar"}}//se en la barra de arriba
            />
        </Stack.Navigator>
    )
}
