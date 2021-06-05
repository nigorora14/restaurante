import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import { map } from 'lodash'

import Modal from '../Modal'
import ChangeDisplayNameForm from './ChangeDisplayNameForm'
import ChangeEmailForm from './ChangeEmailForm'
import ChangePasswordForm from './ChangePasswordForm'

export default function AccountOptions({user,toastRef,setRelodUser}) {

    const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)
    
    
    //function generateOptions() {
    const generateOptions = () => {
        return [
            {
                title : "Editar Nombres",
                iconNameLeft: "account-circle",
                iconColorLeft: "#442484",
                iconNameRight: "chevron-right",
                iconColorRight: "#442484",
                onPress: () => selectedComponent("displayName")
            },
            {
                title : "Editar Email",
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
        switch (key) {
            case "displayName": setRenderComponent (
                <ChangeDisplayNameForm
                    displayName={user.displayName}
                    setShowModal={setShowModal}
                    toastRef={toastRef}
                    setRelodUser={setRelodUser}
                />
            )
            break;
            case "email": setRenderComponent (
                <ChangeEmailForm
                email={user.email}
                setShowModal={setShowModal}
                toastRef={toastRef}
                setRelodUser={setRelodUser}
                />
            )
            break;
            case "password": setRenderComponent (
                <ChangePasswordForm
                    setShowModal={setShowModal}
                    toastRef={toastRef}
                />
            )
            break;
        }
        setShowModal(true)
    }
    const menuOptions= generateOptions()

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
                {
                    renderComponent
                }
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({

    menuItem:{
        borderBottomWidth: 2,
        borderBottomColor: "#bda4d5"
    }

})
