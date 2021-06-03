import {firebaseApp} from './firebase'
import firebase from 'firebase'
import 'firebase/firestore'

//para tener acceso a la base de datos
const db=firebase.firestore(firebaseApp)

//crear la  funcion => la funcion nos va decir si esta logeado o no
export const isUserLogged = () => {
    let isLogged=false //indica que usuario no esta logeado
    firebase.auth().onAuthStateChanged((user) => 
    {
        user !== null && (isLogged=true) //indica que si esta logeado el usuario
    })
    return isLogged
}

export const getCurrentUser = () => 
{
    return firebase.auth().currentUser
}
export const closeSession = () => 
{
    return firebase.auth().signOut()
}
export const registerUser = async(email,password) => {
    const result = {
        statusResponse: true, error: null
    }
    try {
        await firebase.auth().createUserWithEmailAndPassword(email,password)
    } catch (error) {
        result.statusResponse=false
        result.error="Este correo ya fue registrado."
    }

    return result
}
export const loginWithEmailAndPassword = async(email,password) => {
    const result = {
        statusResponse: true, error: null
    }
    try {
        await firebase.auth().signInWithEmailAndPassword(email,password)
    } catch (error) {
        result.statusResponse=false
        result.error="Usuario y/o Contraseña no validos."
    }

    return result
}