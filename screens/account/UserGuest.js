import React from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'

export default function UserGuest() {
    return (//sirve para realizar scroll
        <ScrollView
            centerContent={true} //o tambien puede ser centerContent igual significa que es true
            style={styles.viewBody}
        >
            <Image 
                source = {require("../../assets/logo.png")}
                style={styles.image}
            />
            <Text 
                style={styles.title}>
                Consulta tu perfil en restaurantes
            </Text>
            <Text 
                style={styles.description}>
                ¿Como describirias tu mejor restaurante? Busca y   visualiza los mejores restaurantes de una forma   sencilla, vota cual te ha gustado más y comenta cómo  ha sido tu experiencia.
            </Text>
            <Button
                buttonStyle={styles.button}
                title="Ver tu perfil"
                onPress={()=> console.log("Click!!!")}//llama a o ventana
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 10,
        alignItems: "center",
        resizeMode:"contain"
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: "center"
    },
    description:{
        textAlign : "justify",//justify comienza desde la izquierda ajustando los caracteres
        marginBottom : 10,
        color : "#a65273"    
    },
    button:{
        backgroundColor : "#735b9b"
    }
})
