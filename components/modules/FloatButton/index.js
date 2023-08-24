import { View, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { colors } from "../../../colors"

import Button from "../../ui/Button"

const FloatButton = ({ label, href }) => {
    const router = useRouter()
    return (<View style={styles.button}>
        <Button
            label={label}
            onPress={() => router.push(href)}
        />
    </View>)
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: colors.bgGrey + '60',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 60,
        paddingBottom: 30
    }
})

export default FloatButton