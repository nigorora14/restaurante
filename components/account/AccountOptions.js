import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import { map } from 'lodash'

import Modal from '../Modal'

export default function AccountOptions({user,toastRef}) {

    const menuOptions= generateOptions()
    const [showModal, setShowModal] = useState(false)
    return (
        <View>
            {
                map (menuOptions, (menu, index) => (
                    <ListItem
                        key={index}
                        style={styles.menuItem}
                        onPress={menu.onPress}
                    >
                        <Icon
                            type="material-community"
                            name={menu.iconNameLeft}
                            color={menu.iconColorLeft}
                        />
                        <ListItem.Content>
                            <ListItem.Title>{menu.title}</ListItem.Title>
                        </ListItem.Content>
                        <Icon
                            type="material-community"
                            name={menu.iconNameRight}
                            color={menu.iconColorRight}
                        />
                    </ListItem>
                ))                
            }
            <Modal isVisible={showModal} setVisible={setShowModal}>
                <Text>Hola</Text>
                <Text>Hola</Text>
            </Modal>
        </View>
    )
}
//function generateOptions() {
const generateOptions = () => {
    return [
        {
            title : "Cambiar Nombres y Apellido",
            iconNameLeft: "account-circle",
            iconColorLeft: "#442484",
            iconNameRight: "chevron-right",
            iconColorRight: "#442484",
            onPress: () => selectedComponent("displayName")
        },
        {
            title : "Cambiar Email",
            iconNameLeft: "at",
            iconColorLeft: "#442484",
            iconNameRight: "chevron-right",
            iconColorRight: "#442484",
            onPress: () => selectedComponent("email")
        },
        {
            title : "Cambiar Contraseña",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#442484",
            iconNameRight: "chevron-right",
            iconColorRight: "#442484",
            onPress: () => selectedComponent("password")
        }
    ]
}
const selectedComponent = (key) => {
    console.log(key)
}

const styles = StyleSheet.create({

    menuItem:{
        borderBottomWidth: 2,
        borderBottomColor: "#bda4d5"
    }

})
