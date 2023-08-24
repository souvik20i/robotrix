import { Text, StyleSheet } from "react-native"
import { colors } from "../../colors"

const HelperText = ({ label, dark = false, style = {} }) => {
    return (<Text style={{
        ...styles.helper,
        color: dark ? colors.textDark : colors.textLight,
        ...style
    }}>
        {label}
    </Text>)
}

const styles = StyleSheet.create({
    helper: {
        fontSize: 15,
        paddingVertical: 10
    }
})

export default HelperText