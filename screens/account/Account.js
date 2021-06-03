//rnfs
import React, {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Loading from '../../components/Loading';
import { getCurrentUser, isUserLogged } from '../../utils/actions';
import {useFocusEffect} from '@react-navigation/native';

import { firebaseApp } from '../../utils/firebase';
import   firebase from 'firebase';

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

export default function Account() {
    //creando un estado donde el usuario no esta logeado  
    const [login,setLogin] = useState(null) 
    
    useFocusEffect(
    useCallback(() => {
        const user = getCurrentUser()
        user ? setLogin(true) : setLogin(false)
        // setLogin(isUserLogged())
    }, [])
    )
    //si el login es nulo
    if (login == null) {

        return <Loading isVisible={true} text = "Cargando..."/>
    }
     //si llega a este punto es por que termino la consulta del login
     return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})

