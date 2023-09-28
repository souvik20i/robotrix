import { useEffect, useRef } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const ConfirmInput = ({ email, onConfirm }) => {
    const confirmRef = useRef()
    useEffect(() => {
        if (confirmRef.current) confirmRef.current.focus()
    }, [])

    return (<View>
        <Text style={styles.annot}>Please enter your email <Text style={styles.email}>{email}</Text></Text>
        <TextInput
            ref={confirmRef}
            style={styles.input}
            onChangeText={value => onConfirm(email === value)}
        />
    </View>)
}

const styles = StyleSheet.create({
    annot: {
        textAlign: 'center',
        marginVertical: 10
    },
    email: {
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: colors.textGrey + '40',
        borderWidth: 1,
        borderColor: colors.textGrey,
        borderRadius: 5,
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})

export default ConfirmInput