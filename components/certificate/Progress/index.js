import { View, StyleSheet } from "react-native"

import CircularProgress from "react-native-circular-progress-indicator"
import colors from "../../../public/colors"

const Progress = ({ percent }) => {
    return (<View style={styles.progress}>
        <CircularProgress
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
        />
    </View>)
}

const styles = StyleSheet.create({
    progress: {
        padding: 20
    },
    annot: {
        fontSize: 15
    }
})

export default Progress