import { Text, StyleSheet } from "react-native"

import colors from "../../../public/colors"

const Tab = ({ label, activeState, onPress }) => {
    return (<Text
        style={{
            ...styles.tab,
            backgroundColor: activeState ? colors.bgSecondary : colors.textBg + '80',
            color: activeState ? colors.bgPrimary : colors.textDark,
            opacity: activeState ? 1 : 0.5
        }}
        onPress={onPress}>
        {label}
    </Text>)
}

const styles = StyleSheet.create({
    tab: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 50
    }
})

export default Tab