import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Field = ({ label, data }) => {
    return (<View style={styles.field}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.data}>{data}</Text>
    </View>)
}

const styles = StyleSheet.create({
    field: {
        width: '90%',
        marginBottom: '10%',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: colors.textGrey + '90',
        paddingVertical: 12
    },
    label: {
        position: 'absolute',
        top: -10,
        left: 10,
        color: colors.textGrey,
        backgroundColor: colors.bgPrimary,
        fontSize: 12,
        paddingHorizontal: 3
    },
    data: {
        fontSize: 17,
        left: 10
    }
})

export default Field