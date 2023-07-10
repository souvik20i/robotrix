import { View, Text, StyleSheet } from "react-native"
import { RadioButton } from "react-native-paper"

const Radio = ({ label }) => {
    return (<View key={label} style={styles.option}>
        <RadioButton
            status=""
            onPress={() => { }}
        />
        <Text style={styles.label}>{label}</Text>
    </View>)
}

const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        paddingBottom: 2
    }
})

export default Radio