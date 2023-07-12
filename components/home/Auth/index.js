import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch } from "react-redux"
import { authActions } from "../../../store/auth-slice"
import { AntDesign } from "@expo/vector-icons"

import Button from "../../ui/Button"
import HelperText from "../../ui/HelperText"
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
        <Button label={'Sign In'} onPress={signinHandler} dark/>
        <View style={styles.alter}>
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
    alter: {
        alignItems: 'center',
        paddingTop: 20
    },
    altAuth: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical:10
    },
    altAuthText: {
        fontSize: 20,
        color: colors.textLight,
        marginRight: 7
    },
    arrow: {
        paddingTop: 5
    }
})

export default Auth