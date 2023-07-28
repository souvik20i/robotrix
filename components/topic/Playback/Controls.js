import { View, TouchableWithoutFeedback, StyleSheet } from "react-native"

import Play from "./Play"
import ProgressBar from "./ProgressBar"
import TopBar from "./TopBar"
import colors from "../../../public/colors"

const Controls = ({ status, orientation, onPress, onToggle, onChangePosition, onChangeSpeed }) => {
    const {
        isPlaying, isBuffering, rate, positionMillis, durationMillis, didJustFinish
    } = status

    return (<TouchableWithoutFeedback onPress={onPress}>
        <View style={{
            ...styles.controls,
            height: orientation.isFullscreen ? '100%' : '25%',
            padding: orientation.isFullscreen ? 25 : 10
        }}>
            <TopBar
                rate={rate}
                onChangeRate={onChangeSpeed}
            />
            <Play
                isPlaying={isPlaying}
                isBuffering={isBuffering}
                isFinished={didJustFinish}
                current={positionMillis}
                length={durationMillis}
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