import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input,Icon} from 'react-native-elements'
import { size } from 'lodash'
import { useNavigation } from "@react-navigation/native"

import { validateEmail } from '../../utils/helpers'
import { registerUser } from '../../utils/actions'
import Loading from '../Loading'

const defaultFormValues = () => {
    return { email: "", password: "", confirma: "" }
}

export default function RegisterForm() {
    
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConf, setShowPasswordConf] = useState(false)

    const [formData, setFormData] = useState(defaultFormValues)

    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirma, setErrorConfirma] = useState("")

    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    const onChange = (e, type) => {
        setFormData({
            ...formData,[type]: e.nativeEvent.text
        })
    }

    const validateData = () => {
        setErrorEmail("")
        setErrorPassword("")
        setErrorConfirma("")
        let isValid=true

        if (!validateEmail(formData.email)) {
            setErrorEmail("Debes ingresar un email valido.")
            isValid = false
        }

        if(size (formData.password) < 6){
            setErrorPassword("Debes ingresar una contraseña de al menos 6 caracteres.")
            isValid = false
        }
        if(formData.password != formData.confirma){
            setErrorConfirma("La contraseña no coincide.")
            isValid = false
        }

        return isValid
    }
    
    const doRegisterUser = async () => {
        if (!validateData()) {
            return console.log("con error en la validacion.");
        }else{

            setLoading(true)
            const result = await registerUser(formData.email,formData.password)
            setLoading(false)

            if (!result.statusResponse) {
                setErrorEmail(result.error)
                return
            }else{
                navigation.navigate("_account")
            }
        }
    }

    return (
        <View style={styles.form}>
            <Input 
                containerStyle={styles.input}
                placeholder="Ingresa tu Email"
                onChange={(e)=> onChange(e,"email")}
                keyboardType="email-address"
                errorMessage={errorEmail}
                defaultValue={formData.email}
            />
            <Input 
                containerStyle = {styles.input}
                placeholder  = "Ingresa Contraseña"
                password = {true}
                secureTextEntry = {!showPassword}
                onChange={(e)=> onChange(e,"password") }
                errorMessage={errorPassword}
                defaultValue={formData.errorPassword}
                rightIcon = {
                    <Icon
                        type="material-community"
                        name = { showPassword ? "eye-off-outline" : "eye-outline"} 
                        iconStyle = {styles.icon}
                        onPress = {()=> setShowPassword(!showPassword)}
                    />
                }
            />
            <Input 
                containerStyle={styles.input}
                placeholder="Confirmar Contraseña"
                password={true}
                secureTextEntry={!showPasswordConf}
                onChange = {(e)=> onChange(e,"confirma")}
                errorMessage={errorConfirma}
                defaultValue={formData.confirma}
                rightIcon = {
                    <Icon
                        type = "material-community"
                        name = { showPasswordConf ? "eye-off-outline" : "eye-outline"} 
                        iconStyle = {styles.icon}
                        onPress = {()=> setShowPasswordConf(!showPasswordConf)}
                    />
                }
            />
            <Button
                title="Registrar Usuario"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={()=> doRegisterUser()}
            />
            <Loading 
                isVisible={loading} text="Creando Cuenta..."
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 30
    },
    input: {
        width: "100%",
        width: "90%",
        alignSelf: "center"
    },
    btnContainer: {
        marginTop:20,
        width: "90%",
        alignSelf: "center"
    },
    btn: {
        backgroundColor: "#442484"
    },
    icon : {
        color: "#c1c1c1"
    }
})
