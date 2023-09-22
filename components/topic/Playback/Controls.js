import { View, TouchableWithoutFeedback, StyleSheet } from "react-native"
import { colors } from "../../../colors"

import Play from "./Play"
import ProgressBar from "./ProgressBar"
import TopBar from "./TopBar"

const Controls = ({ status, orientation, isDeliberatelyPaused, onPress, onToggle, onChangePosition, onChangeSpeed }) => {
    const {
        isPlaying, rate, positionMillis, playableDurationMillis, durationMillis, didJustFinish
    } = status

    return (<TouchableWithoutFeedback onPress={onPress}>
        <View style={{
            ...styles.controls,
            height: orientation.isFullscreen ? '100%' : '33%',
            padding: orientation.isFullscreen ? 25 : 10
        }}>
            <TopBar
                rate={rate}
                onChangeRate={onChangeSpeed}
            />
            <Play
                isPlaying={isPlaying}
                isBuffering={positionMillis === playableDurationMillis || (!isDeliberatelyPaused && !isPlaying)}
                isFinished={didJustFinish}
                onToggle={onToggle}
                onChange={onChangePosition}
            />
            <ProgressBar
                current={positionMillis}
                length={durationMillis}
                orientation={orientation}
                onChange={onChangePosition}
            />
        </View>
    </TouchableWithoutFeedback>)
}

const styles = StyleSheet.create({
    controls: {
        position: 'absolute',
        width: '100%',
        backgroundColor: colors.textDark + '80',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default Controls