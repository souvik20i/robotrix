import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native"

import Slider from "@react-native-community/slider"
import colors from "../../../public/colors"

const ProgressBar = ({ current, length, onChange }) => {
    const currentTimestamp = convertMillis(current)
    const totalDuration = convertMillis(length)

    return (<TouchableWithoutFeedback>
        <View style={styles.progressBar}>
            <Text style={styles.time}>{currentTimestamp}</Text>
            <Slider
                style={styles.slider}
                value={current}
                minimumValue={0}
                maximumValue={length}
                minimumTrackTintColor={colors.bgSecondary}
                maximumTrackTintColor={colors.bgGrey}
                thumbTintColor={colors.bgSecondary}
                onSlidingComplete={onChange}
            />
            <Text style={styles.time}>{totalDuration}</Text>
        </View>
    </TouchableWithoutFeedback>)
}

const styles = StyleSheet.create({
    progressBar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    time: {
        color: colors.textLight
    },
    slider: {
        height: 10,
        width: '70%'
    }
})

const convertMillis = millis => {
    const totalSeconds = Math.round(millis / 1000)
    const seconds = totalSeconds % 60
    const totalMinutes = Math.floor(totalSeconds / 60)
    const minutes = totalMinutes % 60
    const hours = Math.floor(totalMinutes / 60)

    const makeDoubleDigits = value => (value < 10) ? `0${value}` : value
    if (!hours) return `${makeDoubleDigits(minutes)}:${makeDoubleDigits(seconds)}`
    return `${makeDoubleDigits(hours)}:${makeDoubleDigits(minutes)}:${makeDoubleDigits(seconds)}`
}

export default ProgressBar