import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { isEmpty, size } from 'lodash'

import { updatePassword,reAuthenticate } from '../../utils/actions'

export default function ChangePasswordForm({setShowModal, toastRef}) {
    const [newPassword, setNewPassword] = useState(null)
    const [currentPassword, setCurrentPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [errorNewPassword, setErrorNewPassword] = useState(null)
    const [errorCurrentPassword, setErrorCurrentPassword] = useState(null)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSubmit = async() => {
        if (!validateForm()) {
            return
        }

        setLoading(true)
        const resultReauthenticate = await reAuthenticate(currentPassword)
        if (!resultReauthenticate.statusResponse) {
            setLoading(false)
            setErrorCurrentPassword("Contraseña no Valida.")
            return
        }
        const resultUpdatePassword = await updatePassword(newPassword)
        setLoading(false)

        if (!resultUpdatePassword.statusResponse) {
            setErrorNewPassword("Hubo un problema actualizando la contraseña, ya esta en uso por otro usuario.")
            return
        }
		
        toastRef.current.show("Se ha actualizado su contraseña.",3000)
        setShowModal(false)
    }
	
    const validateForm = () => {
        setErrorNewPassword(null)
        setErrorCurrentPassword(null)
        setErrorConfirmPassword(null)
        						  
        let isValid = true

        if (isEmpty(currentPassword)) {
            setErrorCurrentPassword("Debes ingresar tu contraseña Actual.")
            isValid = false
        }
        if (size (newPassword) < 6) {
            setErrorNewPassword("Debes ingresar una nueva contraseña de al menos 6 caracteres.")
            isValid = false
        }
        if (size(confirmPassword)<6) {
            setErrorConfirmPassword("Debes ingresar una nueva connfirmacion de tu contraseña de al menos 6 caracteres.")
            isValid = false
        }
        if ((newPassword !== confirmPassword)) {
            setErrorNewPassword("La nueva contraseña y la confirmacion no son iguales.")
            setErrorConfirmPassword("La nueva contraseña y la confirmacion no son iguales.")
            isValid = false
        }
        if (newPassword === currentPassword) {
            setErrorCurrentPassword("La contraseña ingresada no es la actual.")
            setErrorNewPassword("Debes ingresar una contraseña diferente al actual.")
            setErrorConfirmPassword("La nueva contraseña y la confirmacion no son iguales")
            isValid = false
        }
        return isValid
    }
    return (
        <View style={styles.view}>
            
            <Input
                placeholder="Ingresar Contraseña Actual..."
                containerStyle={styles.input}
                defaultValue={currentPassword}
                onChange={(e)=> setCurrentPassword(e.nativeEvent.text)}
                errorMessage={errorCurrentPassword}
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                   <Icon
                        type= "material-community"
                        name= {showPassword ? "eye-off-outline":"eye-outline"}
                        iconStyle={{color: "#442484"}}
                        onPress={()=> setShowPassword(!showPassword)}
                   />
                }
            />
            <Input
                placeholder="Ingresar Nueva Contraseña..."
                containerStyle={styles.input}
                defaultValue={newPassword}
                onChange={(e)=> setNewPassword(e.nativeEvent.text)}
                errorMessage={errorNewPassword}
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                   <Icon
                        type= "material-community"
                        name= {showPassword ? "eye-off-outline":"eye-outline"}
                        iconStyle={{color: "#442484"}}
                        onPress={()=> setShowPassword(!showPassword)}
                   />
                }
            />
            <Input
                placeholder="Confirmar Nueva Contraseña..."
                containerStyle={styles.input}
                defaultValue={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.nativeEvent.text)}
                errorMessage={errorConfirmPassword}
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                   <Icon
                        type= "material-community"
                        name= {showPassword ? "eye-off-outline":"eye-outline"}
                        iconStyle={{color: "#442484"}}
                        onPress={()=> setShowPassword(!showPassword)}
                   />
                }
            />
            <Button
                title="Actualizar Contraseña"
                containerStyle={styles.btnContainer}
                buttonStyle ={styles.btn}
                onPress={onSubmit}
                loading={loading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
view: {
    alignItems: "center",
    paddingVertical: 10
},
input: {
    marginBottom: 10
},
btnContainer: {
    width: "95%"
},
btn: {
    backgroundColor: "#442484"
}
})
