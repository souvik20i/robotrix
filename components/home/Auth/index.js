import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"

import Button from "../../ui/Button"

import colors from "../../../public/colors"

const Auth = () => {
    const router = useRouter()
    const authHandler = () => router.push('/auth')
    return (<View style={styles.auth}>
        <Button label={'Sign In'} onPress={authHandler} />
        <View style={styles.alternative}>
            <Text style={styles.altText}>Don't have an account?</Text>
            <TouchableOpacity style={styles.altAuth} onPress={authHandler}>
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
        padding: 20
    },
    altText: {
        fontWeight: 'bold',
        color: colors.textBg
    },
    altAuth: {
        padding: 20,
        paddingBottom: 10
    },
    altAuthText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.textBg
    },
    bar: {
        backgroundColor: colors.textBg,
        height: 2,
        width: '100%'
    }
})

export default Auth