import { useEffect } from "react"
import { View, StyleSheet, StatusBar } from "react-native"
import { Stack } from "expo-router"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../store/auth-slice"

import Container from "../../components/ui/Container"
import Toggle from "../../components/auth/Toggle"
import Signin from "../../components/auth/Signin"
import Signup from "../../components/auth/Signup"

const Auth = () => {
    const dispatch = useDispatch()
    const isSigninActive = useSelector(state => state.auth.isSigninActive)
    useEffect(() => {
        dispatch(authActions.clearValidations())
        dispatch(authActions.clearSelections())
    }, [isSigninActive])

    return (<Container style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <Toggle />
        <View style={styles.interface}>
            {isSigninActive ? <Signin /> : <Signup />}
        </View>
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight
    },
    interface: {
        flex: 0.8,
        width: '90%'
    }
})

export default Auth