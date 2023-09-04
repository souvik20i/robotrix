import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Footer = () => {
    return (<View style={styles.footer}>
        <Text style={styles.content}>Developed by IEMA Research and Development Pvt. Ltd.</Text>
    </View>)
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 5
    },
    content: {
        color: colors.textLight,
        fontSize: 10
    }
})

export default Footer