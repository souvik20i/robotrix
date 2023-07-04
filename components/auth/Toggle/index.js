import { View, Text, StyleSheet } from "react-native"

import colors from "../../../public/colors"

const Toggle = () => {
    return (<View style={styles.toggle}>
        <Text>Toggle 1</Text>
        <Text>Toggle 2</Text>
    </View>)
}

const styles = StyleSheet.create({
    toggle: {
        width: '50%',
        backgroundColor: colors.bgSecondary,
        flexDirection: 'row',
        borderRadius: 20
    }
})

export default Toggle