import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Title = ({ label, icon }) => {
    return (<View style={styles.header}>
        {icon}
        <Text style={styles.label}>{label}</Text>
    </View>)
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '7%'
    },
    label: {
        color: colors.textDark,
        fontSize: 17,
        fontWeight: 'bold',
        paddingHorizontal: 10
    }
})

export default Title