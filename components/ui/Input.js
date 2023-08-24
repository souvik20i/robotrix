import { useRef } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { colors } from "../../colors"

const Input = ({ label, onChange, error, secured = false }) => {
    const inputRef = useRef()
    const labelHandler = () => inputRef.current.focus()

    return (<View style={styles.block}>
        <Text style={styles.label} onPress={labelHandler}>{label}</Text>
        <TextInput
            ref={inputRef}
            style={{
                ...styles.input,
                borderColor: !error ? colors.bgGrey : colors.error
            }}
            onChangeText={onChange}
            secureTextEntry={secured}
        />
        {error && <Text style={styles.error}>{error}</Text>}
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
    },
    error: {
        color: colors.error,
        paddingTop: 10
    }
})

export default Input