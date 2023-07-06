import { View, Text, TextInput, StyleSheet } from "react-native"

import colors from "../../public/colors"

const Input = ({ label, onChange, secured = false }) => {
    return (<View style={styles.block}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChange}
            secureTextEntry={secured}
        />
    </View>)
}

const styles = StyleSheet.create({
    block: {
        width: '100%',
        padding: 20,
    },
    input: {
        fontSize: 20,
        borderBottomWidth: 5,
        borderColor: colors.textBg,
        borderRadius: 5,
        paddingBottom: 15,
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingVertical: 10,
        color: colors.textDark
    }
})

export default Input