import { View, Text, StyleSheet } from "react-native"
import colors from "../../../public/colors"

const Tab = ({ label, onPress, isActive }) => {
    return (<View style={{
        ...styles.tab,
        backgroundColor: isActive ? colors.bgPrimary : 'transparent'
    }}>
        <Text style={styles.label} onPress={onPress}>{label}</Text>
    </View>)
}

const styles = StyleSheet.create({
    tab: {
        width: '33%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    label: {
        fontSize: 15,
        padding: 15,
        textAlign: 'center'
    }
})

export default Tab