import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch } from "react-redux"
import { authActions } from "../../../store/auth-slice"
import { AntDesign } from "@expo/vector-icons"
import { colors } from "../../../colors"

import Button from "../../ui/Button"
import HelperText from "../../ui/HelperText"

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
        <View style={styles.alter}>
            <HelperText label={"Don't have an account?"} />
            <TouchableOpacity style={styles.altAuth} onPress={signupHandler}>
                <Text style={styles.altAuthText}>Sign Up</Text>
                <AntDesign
                    name="arrowright"
                    style={styles.arrow}
                    size={17}
                    color={colors.textLight}
                />
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    auth: {
        marginTop: '5%'
    },
    alter: {
        alignItems: 'center',
        marginTop: '10%'
    },
    altAuth: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '5%'
    },
    altAuthText: {
        fontSize: 17,
        color: colors.textLight,
        marginRight: 5
    },
    arrow: {
        paddingTop: 5
    }
})

export default Auth