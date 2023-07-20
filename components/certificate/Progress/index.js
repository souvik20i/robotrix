import { View, StyleSheet } from "react-native"

import CircularProgress from "react-native-circular-progress-indicator"
import colors from "../../../public/colors"

const Progress = ({ completed, expected }) => {
    const percent = Math.floor((completed / expected) * 100)
    return (<View style={styles.progress}>
        <CircularProgress
            value={percent}
            radius={80}
            duration={1000}
            valueSuffix={'%'}
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
    }
})

export default Progress