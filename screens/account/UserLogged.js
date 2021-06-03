import React, { useState, useRef,useEffect } from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'
import { closeSession, getCurrentUser } from '../../utils/actions'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-easy-toast'
import Loading from '../../components/Loading'
import InfoUser from '../../components/account/InfoUser'

export default function UserLogged() {
    const toastRef = useRef()
    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(getCurrentUser())
    }, [])

    return (
        <View style={styles.container}> 
            {
            user && <InfoUser user={user}/>
            }
            <Text>Account Options</Text>
            <Button
                title="Cerrar Session"
                onPress = {() => {
                    closeSession()
                    navigation.navigate("_restaurante")
                }}
                buttonStyle={styles.btnCloseSession}
                titleStyle={styles.btnCloseSessionTitle}
            />
            <Toast 
                ref={toastRef} 
                position= "center" 
                opacity={0.9}
            />
            <Loading
                isVisible={loading}
                text={loadingText}
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight:"100%",
        backgroundColor:"#f9f9f9"
    },
    btnCloseSession: {
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        borderTopWidth:1,
        borderBottomWidth: 1,
        borderBottomColor:"#882484",
        paddingVertical:10
    },
    btnCloseSessionTitle: {
        color: "#442484"
    }
})
