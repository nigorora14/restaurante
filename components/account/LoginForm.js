import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input,Icon} from 'react-native-elements'
import { isEmpty, size } from 'lodash'
import { useNavigation } from "@react-navigation/native"

import { validateEmail } from '../../utils/helpers'
import { loginWithEmailAndPassword } from '../../utils/actions'
import Loading from '../Loading'

const defaultFormValues = () => {
    return { email: "", password: ""}
}

export default function LoginForm() {

    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState(defaultFormValues)

    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    const onChange = (e, type) => {
        setFormData({
            ...formData,[type]: e.nativeEvent.text
        })
    }

    const doLogin = async () => {
        if (!validateData()) {
            return //console.log("object") //datos no validos.
        }else{
            //validacion correcta
            setLoading(true)
            const result = await loginWithEmailAndPassword(formData.email, formData.password)
            setLoading(false)

            if (!result.statusResponse) {
                setErrorEmail(result.error)
                setErrorPassword(result.password)
                return
            }else{
                navigation.navigate("_account")
            }
        }
    }
    
    const validateData = () => {
        setErrorEmail("")
        setErrorPassword("")
        let isValid=true

        if (!validateEmail(formData.email)) {
            setErrorEmail("Debes ingresar un email valido.")
            isValid = false
        }  
        if (isEmpty(formData.password)) {
            setErrorPassword("Ingresar una contraseña")
            isValid = false
        }       
        return isValid
    }

    return (
        <View 
        style= {
            styles.container
        }
        >
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
            <Button
                title="Iniciar Sesión"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={()=> doLogin()}
            />
            <Loading 
                isVisible={loading} text="Iniciando Session..."
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop:30
    },
    input: {
        width: "100%",
        alignSelf: "center"
    },
    icon : {
        
        color: "#c1c1c1"
    },
    btnContainer: {
        marginTop:20,
        width: "95%",
        alignSelf: "center"
    },
    btn: {
        backgroundColor: "#442484"
    }
})
