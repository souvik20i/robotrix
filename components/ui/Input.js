import { View, Text, TextInput, StyleSheet } from "react-native"

import colors from "../../public/colors"

const Input = ({ label, onChange, isValid = true, secured = false }) => {
    return (<View style={styles.block}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={{
                ...styles.input,
                borderColor: isValid ? colors.bgSecondary : 'red'
            }}
            onChangeText={onChange}
            secureTextEntry={secured}
            selectionColor={colors.textDark}
        />
    </View>)
}

const styles = StyleSheet.create({
    block: {
        width: '100%',
        padding: 20
    },
    input: {
        fontSize: 20,
        borderBottomWidth: 2,
        paddingBottom: 7
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingVertical: 10,
        color: colors.textDark
    }
})

export default Input