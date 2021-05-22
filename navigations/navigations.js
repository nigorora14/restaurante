//rnf
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

//import restaurante from '../screens/restaurante'

import RestauranteStacks from './RestauranteStacks'
import AccountStacks from './AccountStacks'
import FavoritesStacks from './FavoritesStacks'
import SearchStacks from './SearchStacks'
import TopRestauranteStacks from './TopRestauranteStacks'
//import { View, Text } from 'react-native'

//para crear los botones de abajo antes realizar la importacion de createBottomTabNavigator
const Tab = createBottomTabNavigator()

export default function navigations() {
    return (
        //involucrar todo un contenedor 
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                     name="_restaurante"//nombre interno
                     component={RestauranteStacks}//que objeto va renderizar 
                     options={{title:"Restaurante"}}//para que muestre en la App 
                />
                <Tab.Screen
                     name="_account"//nombre interno
                     component={AccountStacks}//que objeto va renderizar 
                     options={{title:"Cuenta"}}//para que muestre en la App 
                />
                <Tab.Screen
                     name="_favorites"//nombre interno
                     component={FavoritesStacks}//que objeto va renderizar 
                     options={{title:"Favoritos"}}//para que muestre en la App 
                />
                <Tab.Screen
                     name="_search"//nombre interno
                     component={SearchStacks}//que objeto va renderizar 
                     options={{title:"Buscar"}}//para que muestre en la App 
                />
                <Tab.Screen
                     name="_topRestaurante"//nombre interno
                     component={TopRestauranteStacks}//que objeto va renderizar 
                     options={{title:"Top 10"}}//para que muestre en la App 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}