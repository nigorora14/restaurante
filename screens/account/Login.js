import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import LoginForm from '../../components/account/LoginForm'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export default function Login() {
    
    return (
        <KeyboardAwareScrollView>
            <Image
                source={require("../../assets/logo.png")}
                style={styles.image}
            />
            <View style={styles.container}>
                <LoginForm/>
                <CreateAccount/>
            </View>
            <Divider style={styles.divider}/>
        </KeyboardAwareScrollView>
    )
}

function CreateAccount() {
    const navigation = useNavigation()
    return (
        <Text 
            style={styles.register}
            onPress={() => navigation.navigate("_register")}
        >
            ¿Aun no tienes una cuenta?{" - "}
            <Text style={styles.btnRegister}>
                Registrate
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({

    image: {
        resizeMode:"contain",
        height: 200,
        width: "100%",
        marginBottom:20,
        marginVertical:20
    },
    container:{
        marginHorizontal:"10%"    
    },
    divider: {
        backgroundColor:"#442484",
        margin: "10%"
    },
    register: {
        marginTop:15,
        marginHorizontal:"10%",
        alignSelf:"center"
    },
    btnRegister: {
        color: "#442484",
        fontWeight: "bold"
    }
})
