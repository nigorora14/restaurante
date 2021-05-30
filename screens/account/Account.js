//rnfs
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Loading from '../../components/Loading';
import { getCurrentUser, isUserLogged } from '../../utils/actions';

import { firebaseApp } from '../../utils/firebase';
import   firebase from 'firebase';

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';



export default function Account() {
    //creando un estado donde el usuario no esta logeado  
    const [login,setLogin] = useState(null) 
    //indica que si esta logeado el usuario o no
    useEffect(() => {
        // const user = getCurrentUser()
        // user ? setLogin(true) : setLogin(false)
        setLogin(isUserLogged())
    }, [])

    //si el login es nulo
    if (login == null) {

        return <Loading isVisible={true} text = "Cargando..."/>
    }
     //si llega a este punto es por que termino la consulta del login
     return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})

