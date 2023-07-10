import { View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { Stack } from "expo-router"

import Container from "../../components/ui/Container"
import Toggle from "../../components/auth/Toggle"
import Signin from "../../components/auth/Signin"
import Signup from "../../components/auth/Signup"

const Auth = () => {
    const isSigninActive = useSelector(state => state.auth.isSigninActive)
    return (<Container>
        <Stack.Screen options={{ headerShown: false }} />
        <Toggle />
        <View style={styles.interface}>
            {isSigninActive ? <Signin /> : <Signup />}
        </View>
    </Container>)
}

const styles = StyleSheet.create({
    interface: {
        flex: 0.8,
        width: '90%'
    }
})

export default Auth