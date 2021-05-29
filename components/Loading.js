import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements/dist/overlay/Overlay' //

export default function Loading({isVisible, text}) {//va usar dos propiedades isVisible: activar y desactivar y text que va mostrar el login 
    return (
        
        <Overlay isVisible = {isVisible}
                 windowBackgoundColor="rgba(0,0,0,0.5)"
                 overlayBackgroundColor="transparent"
                 overlayStyle={styles.Overlay}
        >
         <View style={styles.view}>
             <ActivityIndicator 
                                size="large"
                                color= "#442484"                   
             />
                 {
                     text && <Text style={styles.text}>{text}</Text>
                 }
         </View>
        </Overlay>

    )
}
//estilos
const styles = StyleSheet.create({
    Overlay: {
                height: 100,
                width:200,
                backgroundColor:"#fff",
                borderColor: "#442484",
                borderWidth:2,
                borderRadius: 10
    },
    view: {
                flex: 1, //todo el ancho disponible
                alignItems: "center", //los elementos esten centrados horizontalmente
                justifyContent: "center" //centrar verticalmente
    },
    text: {
                color: "#442484",
                marginTop:1
    }
})
