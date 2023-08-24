import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { colors } from "../../colors"

const Button = ({ label, onPress, frameStyle, textStyle }) => {
    return (<View style={{ ...styles.button, ...frameStyle }}>
        <TouchableOpacity onPress={onPress}>
            <Text style={{ ...styles.label, ...textStyle }}>{label}</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.bgSecondary,
        borderRadius: 50,
        marginVertical: 20,
        elevation: 1
    },
    label: {
        color: colors.textLight,
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 15,
        paddingHorizontal: 30
    }
})

export default Button