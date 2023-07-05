import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch } from "react-redux"

import Button from "../../ui/Button"
import HelperText from "../../ui/HelperText"

import { authActions } from "../../../store/authSlice"
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
            </TouchableOpacity>
            <View style={styles.bar} />
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
        paddingTop: 30
    },
    altAuth: {
        paddingBottom: 10
    },
    altAuthText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.textLight
    },
    bar: {
        backgroundColor: colors.textLight,
        height: 2,
        width: '100%'
    }
})

export default Auth