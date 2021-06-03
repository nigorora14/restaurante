import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar,ListItem } from 'react-native-elements'

export default function InfoUser({user}) {
    console.log(user)
    return (
        <ListItem style={styles.container}>
            <Avatar
                rounded 
                activeOpacity={0.7}
                size= "large"
                alignSelf= "center"
                textAlign= "center"
                source= {
                    user.photoURL? {uri: photoURL} : require("../../assets/avatar-default.jpg")
                }
            />
            <ListItem.Content>
                <ListItem.Title style={styles.displayname}>
                    {user.displayName ? user.displayName : "Anónimo"}
                </ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            {/* <ListItem.Chevron/>  para agregar al final ">" */}
        </ListItem>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#c7b1db",
        paddingVertical:5
    }, displayname: {
        fontWeight: "bold",
        paddingBottom: 5 
    }
})
