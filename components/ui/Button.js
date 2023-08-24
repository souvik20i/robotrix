import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { colors } from "../../colors"

const Button = ({ label, onPress, frameStyle, textStyle, children }) => {
    return (<View style={{ ...styles.outer, ...frameStyle }}>
        <TouchableOpacity style={styles.inner} onPress={onPress}>
            <Text style={{ ...styles.label, ...textStyle }}>{label}</Text>
            <View style={styles.status}>{children}</View>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    outer: {
        backgroundColor: colors.bgSecondary,
        borderRadius: 50,
        marginVertical: 20,
        marginHorizontal: 80,
        elevation: 1
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        color: colors.textLight,
        textAlign: 'center',
        fontSize: 18,
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    status: {
        position: 'relative',
        right: 10
    }
})

export default Button