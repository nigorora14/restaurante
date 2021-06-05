import {firebaseApp} from './firebase'
import firebase from 'firebase'
import 'firebase/firestore'
import { fileToBlob } from './helpers'

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

export const uploadImage= async(image, path, name) => {
    const result = {
        statusResponse: false,
        error: null,
        url: null
    }
    const ref = firebase.storage().ref(path).child(name)
    const blob = await fileToBlob(image)
    
    try {
        await ref.put(blob)
        const url=await firebase.storage().ref(`${path}/${name}`).getDownloadURL()
        result.statusResponse=true
        result.url=url
    } catch (error) {
        result.error=error
    }

    return result
}

export const updateProfile = async(data) => {
    const result = {
        statusResponse:true, error: null
    }
    try {
        await firebase.auth().currentUser.updateProfile(data)
    } catch (error) {
        result.statusResponse=false
        result.error=error
    }
    return result
}
export const reAuthenticate = async(password) => {
    const result = {
        statusResponse:true, error: null
    }
    const user = getCurrentUser()
    const credentials = firebase.auth.EmailAuthProvider.credential(user.email,password)

    try {
        await user.reauthenticateWithCredential(credentials)
    } catch (error) {
        result.statusResponse=false
        result.error=error
    }
    return result
}
export const updateEmail = async(email) => {
    const result = {
        statusResponse:true, error: null
    }
    try {
        await firebase.auth().currentUser.updateEmail(email)
    } catch (error) {
        result.statusResponse=false
        result.error=error
    }
    return result
}

export const updatePassword = async(password) => {
    const result = {
        statusResponse:true, error: null
    }
    try {
        await firebase.auth().currentUser.updatePassword(password)
    } catch (error) {
        result.statusResponse=false
        result.error=error
    }
    return result
}