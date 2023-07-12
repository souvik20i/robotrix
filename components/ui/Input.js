import { View, Text, TextInput, StyleSheet } from "react-native"

import colors from "../../public/colors"

const Input = ({ label, onChange, isValid = true, secured = false }) => {
    return (<View style={styles.block}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={{
                ...styles.input,
                borderColor: isValid ? colors.bgGrey : 'red'
            }}
            onChangeText={onChange}
            secureTextEntry={secured}
        />
    </View>)
}

const styles = StyleSheet.create({
    block: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    input: {
        fontSize: 20,
        borderBottomWidth: 2,
        paddingBottom: 7
    },
    label: {
        fontSize: 17,
        paddingVertical: 10,
        color: colors.textDark
    }
})

export default Input