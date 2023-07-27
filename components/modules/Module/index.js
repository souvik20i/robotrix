import { TouchableOpacity, Text, StyleSheet } from "react-native"
import colors from "../../../public/colors"

const Module = ({ id, name, onPress = () => { } }) => {
    return (<TouchableOpacity style={styles.module} onPress={onPress}>
        <Text style={styles.header}>Module {id}</Text>
        <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    module: {
        backgroundColor: colors.bgSecondary,
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 3
    },
    header: {
        color: colors.textLight,
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 15
    },
    title: {
        color: colors.textLight,
    }
})

export default Module