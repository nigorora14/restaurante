import React, { useState, useRef,useEffect } from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'
import { closeSession, getCurrentUser } from '../../utils/actions'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-easy-toast'
import Loading from '../../components/Loading'
import InfoUser from '../../components/account/InfoUser'
import AccountOptions from '../../components/account/AccountOptions'

export default function UserLogged() {
    const toastRef = useRef()
    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [user, setUser] = useState(null)
    const [relodUser, setRelodUser] = useState(false)

    useEffect(() => {
        setUser(getCurrentUser())
        setRelodUser(false)
    }, [relodUser])

    return (
        <View style={styles.container}> 
            {
            user && (
                <View>
                <InfoUser 
                    user={user} 
                    setLoading={setLoading} 
                    setLoadingText={setLoadingText}
                />
                <AccountOptions
                    user={user}
                    toastRef={toastRef}
                    setRelodUser={setRelodUser}
                />
                </View>
            )
            }
            
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
        marginTop: "20%",
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        borderTopWidth:1,
        borderBottomWidth: 1,
        //borderBottomColor:"#442484",
        paddingVertical:10
    },
    btnCloseSessionTitle: {
        color: "#442484"
    }
})
