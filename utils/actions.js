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
}