import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch } from "react-redux"
import { AntDesign } from "@expo/vector-icons"

import Button from "../../ui/Button"
import HelperText from "../../ui/HelperText"

import { authActions } from "../../../store/auth-slice"
import colors from "../../../public/colors"

const Auth = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const signinHandler = () => {
        dispatch(authActions.turnToSignin())
        router.push('/auth')
    }

    const signupHandler = () => {
        dispatch(authActions.turnToSignup())
        router.push('/auth')
    }

    return (<View style={styles.auth}>
        <Button label={'Sign In'} onPress={signinHandler} />
        <View style={styles.alternative}>
            <HelperText label={"Don't have an account?"} />
            <TouchableOpacity style={styles.altAuth} onPress={signupHandler}>
                <Text style={styles.altAuthText}>Sign Up</Text>
                <AntDesign name="arrowright" style={styles.arrow} size={24} color="white" />
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    auth: {
        flex: 0.3,
        paddingTop: 20
    },
    alternative: {
        alignItems: 'center',
        paddingTop: 10
    },
    altAuth: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    altAuthText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.textLight,
        marginRight: 7
    },
    arrow: {
        paddingTop: 5
    }
})

export default Auth