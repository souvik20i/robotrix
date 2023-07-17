import { View, TouchableWithoutFeedback, StyleSheet } from "react-native"

import Play from "./Play"
import ProgressBar from "./ProgressBar"
import TopBar from "./TopBar"
import colors from "../../../public/colors"

const Controls = ({ status, onPress, onToggle, onChangePosition, onChangeSpeed }) => {
    const {
        isPlaying, isBuffering, rate, positionMillis, durationMillis, didJustFinish
    } = status

    return (<TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.controls}>
            <TopBar
                rate={rate}
                onChangeRate={onChangeSpeed}
            />
            <Play
                isPlaying={isPlaying}
                isBuffering={isBuffering}
                onPress={onToggle}
            />
            <ProgressBar
                current={positionMillis}
                length={durationMillis}
                onChange={onChangePosition}
            />
        </View>
    </TouchableWithoutFeedback>)
}

const styles = StyleSheet.create({
    controls: {
        position: 'absolute',
        height: '25%',
        width: '100%',
        backgroundColor: colors.textDark + '80',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    }
})

export default Controls