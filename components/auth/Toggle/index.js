import { View, Text, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { authActions } from "../../../store/authSlice"
import colors from "../../../public/colors"

const Toggle = () => {
    const dispatch = useDispatch()
    const isSigninActive = useSelector(state => state.auth.isSigninActive)
    const signinHandler = () => dispatch(authActions.turnToSignin())
    const signupHandler = () => dispatch(authActions.turnToSignup())

    return (<View style={styles.toggle}>
        <Text
            style={{
                ...styles.tab, ...styles.signin,
                backgroundColor: isSigninActive ? colors.bgPrimary : colors.textBg,
                color: isSigninActive ? colors.textLight : colors.textDark
            }}
            onPress={signinHandler}>
            Sign In
        </Text>
        <Text
            style={{
                ...styles.tab, ...styles.signup,
                backgroundColor: !isSigninActive ? colors.bgPrimary : colors.textBg,
                color: !isSigninActive ? colors.textLight : colors.textDark
            }}
            onPress={signupHandler}>
            Sign Up
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    toggle: {
        backgroundColor: colors.textBg,
        flexDirection: 'row',
        borderRadius: 50,
        padding: 5
    },
    tab: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 50
    },
    signin: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    signup: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    }
})

export default Toggle