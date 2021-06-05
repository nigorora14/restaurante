//rnf
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import restaurante from '../screens/restaurante/restaurante'

//creando el stack de navegacion - lo que se ve en la parte de arriba del menu
const Stack = createStackNavigator()

export default function RestauranteStacks() {
    
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="_restaurante"
            component={restaurante}
            options={{title:"Restaurantes"}}//se en la barra de arriba
            />
        </Stack.Navigator>
    )
}
