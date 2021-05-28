//rnfs
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { firebaseApp } from '../../utils/firebase';
import   firebase from 'firebase';

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

export default function Account() {
    const [login,setLogin] = useState(null) //creando un estado donde el usuario no esta logeado
    
    
        firebase.auth().onAuthStateChanged((user) => 
        {
            user !== null ? (setLogin(true)):setLogin(false) //indica que si esta logeado el usuario o no
        })
    

    //si el login es nulo
    if (login==null) {
        return <Text>Cargando...</Text>
    }
    //si llega a este punto es por que termino la consulta del login
    return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})

