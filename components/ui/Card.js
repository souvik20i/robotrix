import { View, StyleSheet } from "react-native"

import colors from "../../public/colors"

const Card = ({ children, style }) => {
    return (<View style={{
        ...styles.card,
        ...style
    }}>{children}</View>)
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        backgroundColor: colors.textBg,
        padding: 20,
        marginVertical: 10,
        borderRadius: 20,
        elevation: 1
    }
})

export default Card