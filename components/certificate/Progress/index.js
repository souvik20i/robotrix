import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

// import CircularProgress from "react-native-circular-progress-indicator"

const Progress = ({ percent }) => {
    return (<View style={styles.progress}>
        <Text style={styles.annot}>{percent}% Completed</Text>
        {/* <CircularProgress
            value={percent}
            radius={80}
            duration={1000}
            valueSuffix={'%'}
            title={'Completed'}
            titleStyle={styles.annot}
            progressValueColor={colors.bgSecondary}
            activeStrokeColor={colors.bgSecondary}
            inActiveStrokeColor={colors.bgGrey}
            activeStrokeWidth={20}
        /> */}
    </View>)
}

const styles = StyleSheet.create({
    progress: {
        padding: 10
    },
    annot: {
        fontSize: 20,
        color: colors.bgSecondary,
        fontWeight: 'bold'
    }
})

export default Progress