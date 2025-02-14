import React, {useState} from 'react'
import { StyleSheet,View } from 'react-native'
import { Button, Input} from 'react-native-elements'
import { isEmpty} from 'lodash'

import { updateProfile } from '../../utils/actions'

export default function ChangeDisplayNameForm({ displayName, setShowModal, toastRef, setRelodUser}) {
    const [newDisplayName, setNewDisplayName] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const onSubmit = async() => {
        if (!validateForm()) {
            return
        }
		
        setLoading(true)
        const result = await updateProfile({displayName: newDisplayName}) 
        setLoading(false)

        if (!result.statusResponse) {
            setError("Error al actualizar nombres y apellidos, intenta mas tarde")
            return
        }
		
        setRelodUser(true)
        toastRef.current.show("Se han actualizado nombres y apellidos.",3000)
        setShowModal(false)
    }
	
    const validateForm = () => {
        setError(null)

        if (isEmpty(newDisplayName)) {
            setError("Debes Ingresar nombres y apellidos")
            return false
        }
        if (newDisplayName===displayName) {
            setError("Debes Ingresar nombres y apellidos diferentes a los actuales.")
            return false
        }
        return true
    }
    return (
        <View style={styles.view}>
            <Input
                placeholder="Ingresa Nombres..."
                containerStyle={styles.input}
                defaultValue={displayName}
                onChange={(e)=> setNewDisplayName(e.nativeEvent.text)}
                errorMessage={error}
                rightIcon={{
                    type: "material-community",
                    name: "account-circle-outline",
                    color: "#442484"
                }}
            />
            <Button
                title="Actualizar Nombres"
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
