//rnf
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements/dist/icons/Icon'

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
     //crear una constante para agregar iconos
     const screenOptions = (route,color) => {
          let iconName
          switch (route.name) { //route.name es lo que recibe de la variable route
               case "_restaurante":
                    iconName="compass-outline"
                    break;
               case "_account":
                    iconName="home-outline"
                    break;
               case "_favorites":
                    iconName="heart-outline"
                    break;
               case "_search":
                    iconName="magnify"
                    break;
               case "_topRestaurante":
                    iconName="star-outline"
                    break;
          }
          return(//el parentesis implica un retorno
               //definiendo las propiedades
               <Icon 
               type="material-community"//la familia de iconos
               name={iconName}
               size={22}
               color={color}//parametro que espera el metodo
               />
          )
     } 
    return (
        //involucrar todo un contenedor 
        <NavigationContainer>
            <Tab.Navigator
               initialRouteName="_topRestaurante"//donde va iniciar la app
               tabBarOptions={{//los colores que tendra cuando esta activo y desactivo
                              inactiveTintColor:"#a17dc3",
                              activeTintColor:"#442484"
               }}//definir el color
               
               screenOptions={({route})=>({
                              tabBarIcon: ({color})=>screenOptions(route,color)
               })}
            >
                <Tab.Screen
                     name="_restaurante"//nombre interno
                     component={RestauranteStacks}//que objeto va renderizar 
                     options={{title:"Restaurante"}}//para que muestre en la App 
                />
                <Tab.Screen
                     name="_favorites"//nombre interno
                     component={FavoritesStacks}//que objeto va renderizar 
                     options={{title:"Favoritos"}}//para que muestre en la App 
                />
                <Tab.Screen
                     name="_topRestaurante"//nombre interno
                     component={TopRestauranteStacks}//que objeto va renderizar 
                     options={{title:"Top 5"}}//para que muestre en la App 
                />
                <Tab.Screen
                     name="_search"//nombre interno
                     component={SearchStacks}//que objeto va renderizar 
                     options={{title:"Buscar"}}//para que muestre en la App 
                />
                <Tab.Screen
                     name="_account"//nombre interno
                     component={AccountStacks}//que objeto va renderizar 
                     options={{title:"Cuenta"}}//para que muestre en la App 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}