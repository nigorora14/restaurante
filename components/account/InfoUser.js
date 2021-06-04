import React,{useState} from 'react'
import { Alert } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar,ListItem } from 'react-native-elements'
import { updateProfile, uploadImage } from '../../utils/actions'
import { loadImageFromGallery } from '../../utils/helpers'

export default function InfoUser({user,setLoading, setLoadingText}) {
    const [photoUrl, setPhotoUrl] = useState(user.photoURL)
    
    const changePhoto = async () => {
        const result = await loadImageFromGallery([1,1])
        if (!result.status) {
            return
        }
        setLoadingText("Actualizando Imagen...")
        setLoading(true)
        const resultUploadImage = await uploadImage(result.image,"avatars", user.uid)
        if (!resultUploadImage.statusResponse) {
            setLoading(false)
            Alert.alert("Ha ocurrido un error al almacenar la foto de perfil.")
            return
        }
        const resultUpdateProfile = await updateProfile({photoURL: resultUploadImage.url})
        setLoading(false)
        if (resultUpdateProfile.statusResponse) {
            setPhotoUrl(resultUploadImage.url)
        }else{
            Alert.alert("Ha ocurrido un error al actualizar la foto de perfil.")
        }
    }
    return (
        <ListItem style={styles.container}>
            <Avatar
                rounded = {true}
                activeOpacity={0.7}
                size= "large"
                alignSelf= "center"
                textAlign= "center"
                onPress={changePhoto}
                source= {
                    photoUrl
                    ? {uri: photoUrl} 
                    : require("../../assets/avatar-default.jpg")}
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
        backgroundColor: "#f9f9f9",
        paddingVertical:20
    }, displayname: {
        fontWeight: "bold",
        paddingBottom: 5
    }
})
