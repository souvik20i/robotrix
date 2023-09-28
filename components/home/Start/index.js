import { View, Text, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { catchAsync } from "../../../hooks/use-http"
import { FontAwesome } from '@expo/vector-icons'
import { colors } from "../../../colors"

import AsyncStorage from "@react-native-async-storage/async-storage"
import Button from "../../ui/Button"

const Start = ({ name }) => {
    const router = useRouter()

    const startHandler = () => {
        router.push('/modules')
    }

    const signOutHandler = catchAsync(async () => {
        await AsyncStorage.removeItem('token')
        router.replace('/')
    })

    return (<View style={styles.start}>
        <Text style={styles.welcome}>Welcome, {name.split(' ')[0]}</Text>
        <Button
            label={'Start Learning'}
            onPress={startHandler}
        />
        <Button
            label={<FontAwesome name="sign-out" size={20} color={colors.textLight} />}
            onPress={signOutHandler}
            textStyle={styles.signout}
        />
    </View>)
}

const styles = StyleSheet.create({
    start: {
        alignItems: 'center',
        marginTop: '5%'
    },
    welcome: {
        color: colors.textLight,
        fontSize: 17,
        marginBottom: '10%'
    },
    signout: {
        paddingVertical: 10
    }
})

export default Start