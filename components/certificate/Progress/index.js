import { View, Text, StyleSheet } from "react-native"
import { Circle } from "react-native-progress"
import { colors } from "../../../colors"

const Progress = ({ portion }) => {
    return (<View style={styles.progress}>
        <Circle
            progress={portion}
            size={150}
            color={colors.bgSecondary}
            textStyle={styles.annot}
            showsText
        />
        <Text style={styles.label}>Completed</Text>
    </View>)
}

const styles = StyleSheet.create({
    progress: {
        padding: 10,
        alignItems: 'center'
    },
    annot: {
        color: colors.bgSecondary
    },
    label: {
        color: colors.bgSecondary,
        fontSize: 20,
        padding: 10
    }
})

export default Progress