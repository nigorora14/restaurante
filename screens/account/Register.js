import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import RegisterForm from '../../components/account/RegisterForm'

export default function Register() {
    return (
        <KeyboardAwareScrollView>
            <Image
                source={require("../../assets/logo.png")}
                style={styles.image}
            />
            <RegisterForm/>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
        height: 150,
        width: "100%",
        marginBottom: 20,
        marginVertical: 20
    }
})
