import { View, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { FontAwesome } from '@expo/vector-icons';

import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../ui/Button"
import colors from "../../../public/colors";

const Start = () => {
    const router = useRouter()
    const startHandler = () => {
        router.push('/modules')
    }
    const signOutHandler = async () => {
        await AsyncStorage.removeItem('username')
        await AsyncStorage.removeItem('password')
    }
    return (<View style={styles.start}>
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
    startLearning: {
        fontSize: 25,
        paddingVertical: 15
    },
    signout: {
        paddingHorizontal: 30
    }
})

export default Start