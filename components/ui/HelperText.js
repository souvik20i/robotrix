import { Text, StyleSheet } from "react-native"

import colors from "../../public/colors"

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
        fontWeight: 'bold',
        fontSize: 15,
        paddingVertical:20
    }
})

export default HelperText