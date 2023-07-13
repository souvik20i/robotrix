import { View, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { getAuth, signOut } from "firebase/auth"

import Button from "../../ui/Button"

const auth = getAuth()

const Start = () => {
    const router = useRouter()
    const startHandler = () => {
        router.push('/modules')
    }
    const signOutHandler = async () => {
        await signOut(auth)
    }
    return (<View style={styles.start}>
        <Button label={'Start Learning'} onPress={startHandler} dark />
        <Button label={'Signout'} onPress={signOutHandler} style={styles.signout} small />
    </View>)
}

const styles = StyleSheet.create({
    start: {
        flex: 0.3,
        paddingTop: 20,
        alignItems: 'center'
    },
    signout: {
        width: '50%'
    }
})

export default Start