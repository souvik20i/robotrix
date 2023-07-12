import { View, StyleSheet } from "react-native"
import { useRouter } from "expo-router"

import Button from "../../ui/Button"

const Start = () => {
    const router = useRouter()
    const startHandler = () => {
        router.push('/modules/1/test')
    }
    return (<View style={styles.start}>
        <Button label={'Start Learning'} onPress={startHandler} dark/>
    </View>)
}

const styles = StyleSheet.create({
    start: {
        flex: 0.3,
        paddingTop: 20
    }
})

export default Start