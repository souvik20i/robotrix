import { View, Text, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { FontAwesome } from '@expo/vector-icons';

import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../ui/Button"
import colors from "../../../public/colors";

const Start = ({ name }) => {
    const router = useRouter()

    const startHandler = () => {
        router.push('/modules')
    }

    const signOutHandler = async () => {
        await AsyncStorage.removeItem('token')
        router.replace('/')
    }

    return (<View style={styles.start}>
        <Text style={styles.welcome}>Welcome, {name.split(' ')[0]}</Text>
        <Button
            style={styles.startLearning}
            label={'Start Learning'}
            onPress={startHandler}
            dark
        />
        <Button
            style={styles.signout}
            label={<FontAwesome name="sign-out" size={30} color={colors.textLight} />}
            onPress={signOutHandler}
            dark
        />
    </View>)
}

const styles = StyleSheet.create({
    start: {
        flex: 0.3,
        paddingTop: 20,
        alignItems: 'center'
    },
    welcome: {
        color: colors.textLight,
        fontSize: 17,
        paddingBottom: 10
    },
    startLearning: {
        fontSize: 25,
        paddingVertical: 15
    },
    signout: {
        paddingHorizontal: 30
    }
})

export default Start