//rnf
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Account from '../screens/account/Account'
import Login from '../screens/account/Login'


//creando el stack de navegacion - lo que se ve en la parte de arriba del menu
const Stack = createStackNavigator()

export default function aAccountStacks() {
    
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="_account"
            component={Account}
            options={{title:"Cuenta"}}//se en la barra de arriba
            />
            <Stack.Screen
            name="_login"
            component={Login}
            options={{title:"Iniciar Session"}}//se en la barra de arriba
            />
        </Stack.Navigator>
    )
}
