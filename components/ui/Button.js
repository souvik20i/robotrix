import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import colors from "../../public/colors"

const Button = ({ label, onPress, dark = false }) => {
    return (<View style={{
        ...styles.button,
        backgroundColor: dark ? colors.bgPrimary : colors.textBg
    }}>
        <TouchableOpacity onPress={onPress}>
            <Text style={{
                ...styles.label,
                color: dark ? colors.textLight : 'black'
            }}>{label}</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 50,
        elevation: 5
    },
    label: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Button