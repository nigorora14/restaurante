import React, {useState} from 'react'
import { StyleSheet,View } from 'react-native'
import { Button, Input, Icon} from 'react-native-elements'
import { isEmpty} from 'lodash'

import { reAuthenticate, updateEmail, updateProfile } from '../../utils/actions'
import { validateEmail } from '../../utils/helpers'

export default function ChangeEmailForm({ email, setShowModal, toastRef, setRelodUser}) {
    const [newEmail, setNewEmail] = useState(email)
    const [password, setPassword] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSubmit = async() => {
        if (!validateForm()) {
            return
        }
		
        setLoading(true)
        const resultReauthenticate = await reAuthenticate(password)
        if (!resultReauthenticate.statusResponse) {
            setLoading(false)
            setErrorPassword("Contraseña no Valida.")
            return
        }
        const resultUpdateEmail = await updateEmail(newEmail)
        setLoading(false)

        if (!resultUpdateEmail.statusResponse) {
            setErrorEmail("Este correo no se encuentra disponible, ya esta en uso por otro usuario.")
            return
        }
		
        setRelodUser(true)
        toastRef.current.show("Se ha actualizado el Email.",3000)
        setShowModal(false)
    }
	
    const validateForm = () => {
        setErrorEmail(null)
        setErrorPassword(null)
        let isvalid = true

        if (!validateEmail(newEmail)) {
            setErrorEmail("Debes Ingresar un Email Valido.")
            isvalid = false
        }
        if (newEmail===email) {
            setErrorEmail("Debes Ingresar un Email diferente al actual.")
            isvalid = false
        }
        if (isEmpty(password)) {
            setErrorPassword("Debes ingresar tu contraseña.")
            isvalid = false
        }
        return isvalid
    }
    return (
        <View style={styles.view}>
            <Input
                placeholder="Ingresa nuevo Email..."
                containerStyle={styles.input}
                defaultValue={email}
                onChange={(e)=> setNewEmail(e.nativeEvent.text)}
                errorMessage={errorEmail}
                keyboardType="email-address"
                rightIcon={{
                    type: "material-community",
                    name: "at",
                    color: "#442484"
                }}
            />
            <Input
                placeholder="Confirmar Contraseña..."
                containerStyle={styles.input}
                defaultValue={password}
                onChange={(e)=> setPassword(e.nativeEvent.text)}
                errorMessage={errorPassword}
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
                title="Actualizar Email"
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
