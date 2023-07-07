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
                ...styles.tab,
                backgroundColor: isSigninActive ? colors.bgSecondary : colors.textBg + '80',
                color: isSigninActive ? colors.bgPrimary : colors.textDark,
                opacity: isSigninActive ? 1 : 0.5
            }}
            onPress={signinHandler}>
            Sign In
        </Text>
        <Text
            style={{
                ...styles.tab,
                backgroundColor: !isSigninActive ? colors.bgSecondary : colors.textBg + '80',
                color: !isSigninActive ? colors.bgPrimary : colors.textDark,
                opacity: !isSigninActive ? 1 : 0.5
            }}
            onPress={signupHandler}>
            Sign Up
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    toggle: {
        backgroundColor: colors.textBg + '80',
        flexDirection: 'row',
        borderRadius: 50
    },
    tab: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 50
    }
})

export default Toggle