import { View, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from "react-native"
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { colors } from "../../../colors"

import Loader from "../../ui/Loader"

const Play = ({ isPlaying, isBuffering, isFinished, current, length, onToggle, onChange }) => {
    const replayHandler = () => onChange(Math.max(current - 10000, 0))
    const forwardHandler = () => onChange(Math.min(current + 10000, length))
    const playAgainHandler = () => onChange(0)

    return (<TouchableWithoutFeedback>
        {isFinished
            ?
            <TouchableOpacity onPress={playAgainHandler}>
                <MaterialIcons name="replay" size={40} color={colors.textLight} />
            </TouchableOpacity>
            :
            <View style={styles.middleBar}>
                <TouchableOpacity onPress={replayHandler}>
                    <MaterialIcons name="replay-10" size={40} color={colors.textLight} />
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={onToggle}>
                    {isBuffering ? <Loader color={colors.textLight} raw /> : isPlaying
                        ?
                        <FontAwesome name="pause" size={40} color={colors.textLight} />
                        :
                        <FontAwesome name="play" size={40} color={colors.textLight} />
                    }
                </TouchableWithoutFeedback>
                <TouchableOpacity onPress={forwardHandler}>
                    <MaterialIcons name="forward-10" size={40} color={colors.textLight} />
                </TouchableOpacity>
            </View>
        }
    </TouchableWithoutFeedback>)
}

const styles = StyleSheet.create({
    middleBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})

export default Play