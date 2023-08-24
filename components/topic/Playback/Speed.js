import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Speed = ({ current, rates, onChange, onToggle }) => {
    const rateChangeHandler = rate => {
        onChange(rate)
        onToggle()
    }
    return (<View style={styles.rates}>
        {rates.map((rate, i) =>
            <Text
                key={i}
                style={{
                    ...styles.rateText,
                    color: rate === current ? colors.bgSecondary : colors.textDark
                }}
                onPress={rateChangeHandler.bind(null, rate)}>
                {rate === 1 ? 'Normal' : `${rate}x`}
            </Text>
        )}
    </View>)
}

const styles = StyleSheet.create({
    rates: {
        position: 'absolute',
        minWidth: 70,
        backgroundColor: colors.bgPrimary,
        padding: 5,
        top: 30
    },
    rateText: {
        padding: 2
    }
})

export default Speed