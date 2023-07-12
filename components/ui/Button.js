import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import colors from "../../public/colors"

const Button = ({ label, onPress, dark = false, small = false, style = {} }) => {
    return (<View style={{
        ...styles.button,
        backgroundColor: dark ? colors.bgSecondary : colors.textBg, ...style
    }}>
        <TouchableOpacity onPress={onPress}>
            <Text style={{
                ...styles.label,
                color: dark ? colors.textLight : colors.textDark,
                fontSize: small ? 25 : 35
            }}>{label}</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        marginVertical: 20,
        elevation: 1
    },
    label: {
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 50
    }
})

export default Button