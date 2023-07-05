import { View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

import Container from "../../components/ui/Container"
import Toggle from "../../components/auth/Toggle"
import Signin from "../../components/auth/Signin"
import Signup from "../../components/auth/Signup"

const Auth = () => {
    const isSigninActive = useSelector(state => state.auth.isSigninActive)
    return (<Container>
        <Toggle />
        <View style={styles.interface}>
            {isSigninActive ? <Signin /> : <Signup />}
        </View>
    </Container>)
}

const styles = StyleSheet.create({
    interface: {
        flex: 0.8,
        width:'100%'
    }
})

export default Auth